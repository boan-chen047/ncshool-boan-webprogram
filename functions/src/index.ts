import { onSchedule } from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";
import axios from "axios";

// 初始化 Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// 💡 這裡改用了 v2 的 onSchedule 寫法，並且把沒用到的 event 參數省略了
export const fetchSteamNews = onSchedule("every 8 hours", async () => {
    try {
        console.log("開始執行 Steam 新聞抓取作業...");
        
        // 1. 讀取遊戲清單
        const gamesSnapshot = await db.collection("game").get();
        
        // 2. 對每款遊戲跑迴圈
        for (const gameDoc of gamesSnapshot.docs) {
            const gameData = gameDoc.data();
            const appId = gameData.appId;
            const gameId = gameData.docId || gameDoc.id; 

            if (!appId) {
                console.log(`[跳過] ${gameDoc.id} 沒有設定 appId`);
                continue; 
            }

            console.log(`正在抓取 ${gameDoc.id} (AppID: ${appId}) 的最新新聞...`);

            // 3. 呼叫 Steam API
            const steamApiUrl = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=5&format=json`;
            const response = await axios.get(steamApiUrl);
            const data = response.data;

            if (data.appnews && data.appnews.newsitems) {
                const newsItems = data.appnews.newsitems;

                // 4. 寫入 news 集合
                for (const item of newsItems) {
                    const newsRef = db.collection("news").doc(item.gid); // 用 gid 防重複

                    await newsRef.set({
                        appId: appId,         
                        gameId: gameId,       
                        title: item.title,    
                        url: item.url,        // Steam 的跳轉網址
                        date: item.date       // Unix 時間戳，用來排序
                    }, { merge: true }); 
                }
                console.log(`✅ ${gameDoc.id} 更新完成！`);
            }
        }
        console.log("🎉 所有遊戲新聞更新完畢！");
        
    } catch (error) {
        console.error("抓取過程中發生錯誤：", error);
    }
});
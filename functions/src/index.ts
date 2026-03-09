import {onSchedule} from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();
const db = admin.firestore();

export const fetchSteamNews = onSchedule("every 8 hours", async () => {
  try {
    console.log("開始執行 Steam 新聞抓取作業...");

    // 1. 讀取遊戲清單
    const gamesSnapshot = await db.collection("game").get();
    const badKeywords = [
      "sale", "midweek madness",
      "community", "spotlight", "fan art", "workshop",
      "merch", "plush", "shop",
      "maintenance",
      "top sellers", "week of",
    ];

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

      const steamApiUrl = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=20&format=json`;
      const response = await axios.get(steamApiUrl);
      const data = response.data;

      if (data.appnews && data.appnews.newsitems) {
        const newsItems = data.appnews.newsitems;

        // 4. 寫入 news 集合
        for (const item of newsItems) {
          if (!item.title) continue;
          const titleLower = item.title.toLowerCase();
          const isBadNews = badKeywords.some(
            (keyword) => titleLower.includes(keyword)
          );

          if (isBadNews) {
            continue;
          }

          const newsRef = db.collection("news").doc(item.gid); // 用 gid 防重複
          await newsRef.set({
            appId: appId,
            gameId: gameId,
            title: item.title,
            url: item.url,
            date: item.date,
          }, {merge: true});
        }
        console.log(` ${gameDoc.id} 更新完成！`);
      }
    }
  } catch (error) {
    console.error("抓取過程中發生錯誤：", error);
  }
});

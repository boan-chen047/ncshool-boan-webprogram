// test1/src/Composable/usenews.ts
import { ref } from 'vue';
import { db } from '../components/firebase/firebase'; // 引用你的 Firebase 設定
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';

// 建立一個反應式陣列，用來放消息
const news = ref<any[]>([]);

export function useNews() {
    const fetchNews = async (gameId?: string) => {
        news.value = [];
        try {
            let q
            if (gameId) {
                q = query(
                    collection(db, "news"), 
                    where("gameId", "==", gameId), // 關鍵：只找標籤符合的消息
                    orderBy("date", "desc"), 
                    limit(10) // 增加上限到 10 則
                );
            } else {
                // 【修改】原本的邏輯：抓取全站最新的 10 則
                q = query(
                    collection(db, "news"), 
                    orderBy("date", "desc"), 
                    limit(10)
                );
            }
            // let  q = query(
            //     collection(db, "news"), 
            //     orderBy("timestamp", "desc"), 
            //     limit(10)
            // );
            
            const querySnapshot = await getDocs(q);
            
            // 整理資料格式
            news.value = querySnapshot.docs.map(doc => ({
                newsId: doc.id,
                ...doc.data()
            }));
            
            console.log("消息讀取成功！");
        } 
        catch (error) {
            console.error("無法取得消息列表：", error);
        }
    };

    return { news, fetchNews };
}
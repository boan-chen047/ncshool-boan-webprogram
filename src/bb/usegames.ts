// test1/src/Composable/useGames.ts
import { ref } from 'vue';
import { db } from '../components/firebase/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const games = ref<any[]>([]);

export function useGames() {
    const fetchGames = async () => {
        if (games.value.length > 0) return; 
        try {
            const querySnapshot = await getDocs(collection(db, "game"));
            games.value = querySnapshot.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("無法取得遊戲列表：", error);
        }
    };
    const fetchGameById = async (id: string) => {
        try {
            const docRef = doc(db, "game", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { docId: docSnap.id, ...docSnap.data() };
            }
            return null;
        } catch (error) {
            console.error("抓取單一遊戲失敗：", error);
            return null;
        }
    };

    return { games, fetchGames, fetchGameById };
}

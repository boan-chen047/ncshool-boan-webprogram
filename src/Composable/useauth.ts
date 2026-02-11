// test1/src/Composable/useAuth.ts
import { ref } from 'vue';
import { auth, googleProvider } from '../asset/firebase'; 
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';

const user = ref<User | null>(null);

// 初始化監聽 (確保全域只有一個監聽器)
onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
});

export function useAuth() {
    const login = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("登入失敗", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("登出失敗", error);
        }
    };

    return {
        user,
        login,
        logout
    };
}
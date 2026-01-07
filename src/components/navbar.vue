<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { auth, googleProvider } from '../asset/firebase'; // 路徑依你實際位置而定
    import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';

    // 定義使用者狀態
    const user = ref<User | null>(null);

    // 監聽登入狀態切換
    onMounted(() => {
        onAuthStateChanged(auth, (currentUser) => {
            user.value = currentUser;
        });
    });

    // 登入方法
    const login = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("登入成功");
        } catch (error) {
            console.error("登入失敗", error);
        }
    };

    // 登出方法
    const logout = async () => {
        await signOut(auth);
        console.log("已登出");
    };
</script>

<template>
    <header class="navbar">
        <div>
           
            <router-link to="/" > <img src="/icon.png"  class="icon"></router-link>
        </div>
        <nav>
            <ul class="navlink">
                <li class="btn"><router-link to="\game" >熱門遊戲</router-link></li>
                <li class="btn">聯絡我們</li>
                <li class="btn" v-if="!user" @click="login">登入</li>
                <li class="btn user-box" v-else>
                    <div @click="logout">
                        <span class="user-name">{{ user.displayName }}</span>
                        <span class="logout-text" >(登出)</span>
                    </div>
                    
                </li>
            </ul>
        </nav>
    </header>
    <main>

    </main>
</template>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .icon {
    height: 60px;    
    width: auto;     
    object-fit: contain; 
    }
    .navbar{
        display: flex;  
        height: 80px;
        width: 100%;              
        justify-content: space-between; 
        align-items: center;         
        padding: 20px 30px;
        background-color: #ffffff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        position: sticky;             
        top: 0;
        z-index: 1000;
    }
    .navlink {
        display: flex;       
        list-style: none;    
        a{
            text-decoration: none;
            color: black;
        }
    }
    .btn{
        padding: 20px;
        font-size: 20px;
        
        :hover{
            color: #007bff;
            cursor: pointer;
        }
    }
</style>

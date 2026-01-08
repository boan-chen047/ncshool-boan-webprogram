<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { auth, googleProvider } from '../asset/firebase';
    import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
    const games = [
    { id: 1, name: '遊戲一' },
    { id: 2, name: '遊戲二' },
    { id: 3, name: '遊戲三' },
    { id: 4, name: '遊戲四' },
    { id: 5, name: '遊戲五' },
    { id: 6, name: '遊戲六' },
    { id: 7, name: '遊戲七' },
    { id: 8, name: '遊戲八' },
    { id: 9, name: '遊戲九' },
    { id: 10, name: '遊戲十' },
    ];
    const user = ref<User | null>(null);

    onMounted(() => {
        onAuthStateChanged(auth, (currentUser) => {
            user.value = currentUser;
        });
    });


    const login = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("登入成功");
        } catch (error) {
            console.error("登入失敗", error);
        }
    };

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
                <li class="btn dropmenu" >熱門遊戲
                    <ul class="dropdown">
                        <li v-for="game in games" :key="game.id" >
                            {{ game.name }}
                        </li>
                    </ul>
                </li>

                <li class="btn">聯絡我們</li>

                <li class="btn" v-if="!user" @click="login">登入</li>
                <li class="btn dropmenu" v-else>{{ user.displayName }}
                    <ul class="logout">
                        <li @click="logout">登出</li>
                    </ul>
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
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);        
        position: sticky;   
        color: white;          
        top: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 1000;
    }
    .navlink {
        display: flex;       
        list-style: none;    
        a{
            text-decoration: none;
            color: black;
        }
        .btn{
            padding: 20px;
            font-size: 20px;
            
            &:hover{
                color: #007bff;
                cursor: pointer;
                a{
                    color: #007bff;
                }
                .dropdown, .logout{
                    display: grid;
                }
            }
            
        }
        .dropmenu{
            position: relative;
            .dropdown, .logout{
                display: none;        
                position: absolute;   
                top: 100%;   
                left: 0%;         
                list-style: none;   
                grid-auto-flow: column;
                gap: 10px;
                padding-top: 15px;
                background: white;
                padding: 10px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                border-radius: 10px;
                border : 0;
                font-size: 20px;
                li{
                    display: flex;           
                    justify-content: center; 
                    align-items: center;     
                    width: 100%;             
                    height: 100%; 
                    &:hover {
                        background-color: #86a0e5;
                        color: black;
                    }
                }
            }
            .dropdown{ 
                grid-template-rows: repeat(5, 50px); 
                grid-template-columns: repeat(2, 100px);
            }
            .logout{
                grid-template-rows: repeat(1, 60px); 
                grid-template-columns: repeat(1, 80px);
            }
        }
    }
</style>

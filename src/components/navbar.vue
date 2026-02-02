<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { auth, googleProvider } from '../asset/firebase';
    import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
    const games = [
    { id: 2-1, name: '遊戲一' },
    { id: 2-2, name: '遊戲二' },
    { id: 2-3, name: '遊戲三' },
    { id: 2-4, name: '遊戲四' },
    { id: 2-5, name: '遊戲五' },
    { id: 2-6, name: '遊戲六' },
    { id: 2-7, name: '遊戲七' },
    { id: 2-8, name: '遊戲八' },
    { id: 2-9, name: '遊戲九' },
    { id: 2-10, name: '遊戲十' },
    ];
    const user = ref<User | null>(null);

    onMounted(() => {
        onAuthStateChanged(auth, (currentUser) => {
            user.value = currentUser;
        });
    });

        const activeIndex = ref('1')
        const activeIndex2 = ref('1')
        const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }

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
    <!-- <header class="navbar">
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

    </main> -->
    <div class="h-6" />
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo , "
        mode="horizontal"
        :ellipsis="false"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <el-menu-item index="1"><router-link to="/"> <img src="/icon.png"  class="icon"></router-link></el-menu-item>
        <el-sub-menu index="2">
            <template #title>熱門遊戲</template>
            <el-menu-item v-for="game in games" index="game.id">{{game.name}}</el-menu-item>
            <!-- <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
        </el-sub-menu>
        <el-menu-item index="3"><router-link to="/" >聯絡我們</router-link></el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .el-menu--horizontal > .el-menu-item:nth-child(1) {
        margin-right: auto;
    }
    .icon {
    height: 60px;    
    width: auto;     
    object-fit: contain; 
    }
    .el-menu-item{
        
    } 
    // .navbar{
    //     display: flex;  
                      
    //     // justify-content: space-between; 
    //     // align-items: center;         
    //     // padding: 20px 30px;
    //     // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);        
    //     // position: sticky;   
    //     // color: white;          
    //     // top: 0;
    //     // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    //     // z-index: 1000;
    // }
    // .navlink {
    //     display: flex;       
    //     list-style: none;    
    //     a{
    //         text-decoration: none;
    //         color: black;
    //     }
    //     .btn{
    //         padding: 20px;
    //         font-size: 20px;
            
    //         &:hover{
    //             color: #007bff;
    //             cursor: pointer;
    //             a{
    //                 color: #007bff;
    //             }
    //             .dropdown, .logout{
    //                 display: grid;
    //             }
    //         }
            
    //     }
    //     .dropmenu{
    //         position: relative;
    //         .dropdown, .logout{
    //             display: none;        
    //             position: absolute;   
    //             top: 100%;   
    //             left: 0%;         
    //             list-style: none;   
    //             grid-auto-flow: column;
    //             gap: 10px;
    //             padding-top: 15px;
    //             background: white;
    //             padding: 10px;
    //             box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    //             border-radius: 10px;
    //             border : 0;
    //             font-size: 20px;
    //             li{
    //                 display: flex;           
    //                 justify-content: center; 
    //                 align-items: center;     
    //                 width: 100%;             
    //                 height: 100%; 
    //                 &:hover {
    //                     background-color: #86a0e5;
    //                     color: black;
    //                 }
    //             }
    //         }
    //         .dropdown{ 
    //             grid-template-rows: repeat(5, 50px); 
    //             grid-template-columns: repeat(2, 100px);
    //         }
    //         .logout{
    //             grid-template-rows: repeat(1, 60px); 
    //             grid-template-columns: repeat(1, 80px);
    //         }
    //     }
    // }
</style>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { auth, googleProvider } from '../asset/firebase';
    import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
    import { Button } from "@/components/ui/button"
    import {
            NavigationMenu,
            NavigationMenuContent,
            NavigationMenuIndicator,
            NavigationMenuItem,
            NavigationMenuLink,
            NavigationMenuList,
            NavigationMenuTrigger,
            navigationMenuTriggerStyle,
            NavigationMenuViewport,
            } from '@/components/ui/navigation-menu'
    const games = [
        { id: '2-1', name: '遊戲一' },
        { id: '2-2', name: '遊戲二' },
        { id: '2-3', name: '遊戲三' },
        { id: '2-4', name: '遊戲四' },
        { id: '2-5', name: '遊戲五' },
        { id: '2-6', name: '遊戲六' },
        { id: '2-7', name: '遊戲七' },
        { id: '2-8', name: '遊戲八' },
        { id: '2-9', name: '遊戲九' },
        { id: '2-10', name: '遊戲十' },
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

    </main> --> <!-- <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo "
            mode="horizontal"
            :ellipsis="false"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <el-menu-item index="1"><router-link to="/"> <img src="/icon.png"  class="icon"></router-link></el-menu-item>
            <el-sub-menu index="2" class="w-3xs">
                <template #title>熱門遊戲</template>
                <el-menu-item v-for="game in games" index="game.id">{{game.name}}</el-menu-item>
                <!-- <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu> -->
            <!-- </el-sub-menu>
            <el-menu-item index="3"><router-link to="/" >聯絡我們</router-link></el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
        </el-menu> -->
    <nav class="sticky top-0 z-50 flex items-center justify-between p-4 border-none  min-h-[10vh] bg-linear-to-r from-slate-900 to-slate-700 text-white ">
  
        <div class="flex items-center">
            <router-link to="/">
                <img src="/icon.png" class="h-16 w-auto object-contain">
            </router-link>
        </div>

        <NavigationMenu>
            <NavigationMenuList class="gap-x-10">
                
                <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">熱門遊戲</NavigationMenuTrigger>
                <NavigationMenuContent class=" !bg-transparent  hover:bg-white/40  focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                    <ul class="grid w-[400px] gap-3 !p-4  md:w-[500px] md:grid-cols-2 lg:w-[600px] !bg-transparent  hover:bg-white/40  focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                    <li v-for="game in games" :key="game.id" class="p-8">
                        <NavigationMenuLink as-child>
                        <a
                            href="#"
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                            <div class="text-sm font-bold leading-none ">{{ game.name }}</div>
                            <p class="line-clamp-2 text-sm leading-snug text-zinc-700">
                            點擊查看遊戲詳情
                            </p>
                        </a>
                        </NavigationMenuLink>
                    </li>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuLink as-child class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                    <a href="#" :class="navigationMenuTriggerStyle()">
                    討論區
                    </a>
                </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <NavigationMenuLink as-child class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                    <a href="#" :class="navigationMenuTriggerStyle()">
                    最新消息
                    </a>
                </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

        <div class="flex items-center gap-4  ">
            <template v-if="!user">
                <Button variant="outline" class="w-18 bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20" @click="login">登入</Button>
            </template>
            <template v-else>
            <div class="flex items-center gap-2">
                <span class="text-sm font-medium">{{ user.displayName }}</span>
                <Button variant="ghost" size="sm" @click="logout">登出</Button>
            </div>
            </template>

        </div>
        <!-- <div class="flex items-center gap-4">
            <a href="#" >討論區</a>
            <a href="#">最新消息</a>
            <button class="bg-black text-white px-4 py-2 rounded">登入</button>
        </div> -->
  
    </nav>
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
    height: 10%;    
    width: 10%;     
    object-fit: contain; 
    }
    // .el-menu-item{
        
    // } 
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

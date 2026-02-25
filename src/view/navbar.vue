<script setup lang="ts">
    import { ref, onMounted } from 'vue';
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
    import { useAuth } from '../Composable/useauth';
    import { useGames } from '../Composable/usegames';
    
    const { user, login, logout } = useAuth(); 
    const { games, fetchGames } = useGames();
    onMounted(() => {
        fetchGames();
    });
</script>

<template>
    <nav class="sticky top-0 z-50 flex items-center justify-between p-4 border-none  min-h-[10vh] bg-linear-to-r from-slate-900 to-slate-700 text-white ">
  
        <div class="flex items-center">
            <router-link to="/">
                <img src="/icon.png" class="h-16 w-auto object-contain !ml-4">
            </router-link>
        </div>

        <NavigationMenu>
            <NavigationMenuList class="gap-x-10">
                
                <NavigationMenuItem>
                    <NavigationMenuTrigger class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !p-4">熱門遊戲</NavigationMenuTrigger>
                        <NavigationMenuContent class=" !bg-transparent  hover:bg-white/40  focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                            <ul class="grid w-[400px] gap-3 !p-4  md:w-[500px] md:grid-cols-2 lg:w-[600px] !bg-transparent  hover:bg-white/40  focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20">
                                <li v-for="game in games" :key="game.docId" class="!p-2">
                                    <NavigationMenuLink as-child>
                                        <router-link
                                            :to="`/game/${game.docId}`"
                                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <div class="text-sm font-bold leading-none !pt-1 !ml-1" >{{ game.id }}</div>
                                            
                                            <p class="line-clamp-2 text-sm leading-snug text-zinc-600 !ml-1">
                                                點擊查看遊戲詳情
                                            </p>
                                        </router-link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink as-child class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !p-4" >
                        <a href="#" :class="navigationMenuTriggerStyle()">
                        討論區
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink as-child class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !p-4">
                        <a href="#" :class="navigationMenuTriggerStyle()">
                        最新消息
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>

        <div class="flex items-center gap-4  ">
            <template v-if="!user">
                <Button variant="outline" class="w-18 bg-transparent border-none text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !mr-12" @click="login">登入</Button>
            </template>
            <template v-else>
            <div class="flex items-center gap-2">
                <span class="text-sm font-medium !p-4">{{ user.displayName }}</span>
                <Button variant="ghost" size="sm" @click="logout " class="!p-4 !mr-4">登出</Button>
            </div>
            </template>

        </div>
    </nav>
</template>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>

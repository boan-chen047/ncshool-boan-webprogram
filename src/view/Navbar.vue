<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { Button } from "@/components/ui/button";
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
    import { useAuth } from '../composable/useauth';
    import { useGames } from '../composable/usegames';
    import { useI18n } from 'vue-i18n'

    
    const { user, login, logout } = useAuth(); 
    const { games, fetchGames } = useGames();
    const { locale } = useI18n()
    const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'zh-TW' : 'en'
  }
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
                        <NavigationMenuTrigger class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !p-4"> {{ $t('navbar.popularGames') }} </NavigationMenuTrigger>
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
                                                    {{ $t('navbar.detail') }}
                                                </p>
                                            </router-link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink as-child class="bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !p-4">
                            <router-link to="/news" :class="navigationMenuTriggerStyle()"> 
                            {{ $t('navbar.news') }}
                            </router-link >
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuViewport />
            </NavigationMenu>

            <div class="flex items-center gap-4  ">
                <template v-if="!user">
                    <Button variant="outline" class="w-18 bg-transparent border-none text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 !mr-12" @click="login">{{ $t('navbar.login') }}</Button>
                </template>
                <template v-else>
                    <div class="flex items-center gap-2">
                        <router-link
                                to="/user"
                                class="!mr-2 !ml-2 z-10"
                                @click.stop
                        >
                            <Button variant="outline" class="bg-transparent border-none text-sm font-medium uppercase  tracking-wider text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 cursor-pointer !p-4">
                                {{ user.displayName }}
                            </Button variant="outline">
                        </router-link>

                        <router-link to="/">
                            <Button variant="ghost" size="sm" @click="logout " class="!p-4 !mr-4">{{ $t('navbar.logout') }}</Button>
                        </router-link>
                    </div>    
                </template>
                <Button @click="toggleLanguage" variant="ghost" class="bg-transparent border-none text-sm font-medium uppercase  tracking-wider text-white hover:bg-white/20 hover:text-white focus:bg-white/20 data-[active]:bg-white/20 data-[state=open]:bg-white/20 cursor-pointer !p-4 !mr-4">
                    {{ $t('navbar.switch') }}
                </Button>
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

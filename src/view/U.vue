<script setup lang="ts">
    import { useAuth } from '../bb/useauth';
    
    // 直接把 useAuth 裡面的 user 狀態和登出、登入功能拿出來用
    const { user, login, logout } = useAuth();
</script>

<template>
    <template v-if="user" class="!pb-20">
        
        <div class="!px-4 md:basis-1/2 lg:basis-1/3 flex flex-col items-center !mt-12">
            <img :src="user.photoURL || ''" alt="User Avatar" 
                 class="w-64 h-64 object-cover drop-shadow-2xl transition-transform duration-300 hover:scale-110 rounded-full border-4 border-white/10 !mb-4">
            
            <h1 class="text-5xl font-bold mt-8 tracking-wider !mb-4">{{ user.displayName }}</h1>
            <p class="text-xl text-gray-400 mt-2">{{ user.email }}</p>
        </div>

        <div class="user-info w-full max-w-4xl mx-auto pb-10!">
            <div class="text-4xl font-bold  border-l-8 border-yellow-400 pl-4 translate-x-35 !mt-4 !mb-6">
                User info：
            </div>

            <ul class="flex flex-col  text-cen translate-x-45 w-full !mt-4">
                <li class="w-full !mb-6 ">
                    <div class="w-full bg-white/5 p-6 rounded-xl text-xl hover:bg-white/10 transition-all flex items-center border border-white/5 shadow-sm !p-2">
                        <span class="text-3xl !mr-4">📛</span>
                        <span class="font-bold text-yellow-300 w-32 tracking-wider">Name：</span>
                        <span class="text-gray-200">{{ user.displayName }}</span>
                    </div>
                </li>
                
                <li class="w-full !mb-6">
                    <div class=" w-full bg-white/5 p-6 rounded-xl text-xl hover:bg-white/10 transition-all flex items-center border border-white/5 shadow-sm !p-2">
                        <span class="text-3xl !mr-4">📧</span>
                        <span class="font-bold text-yellow-300 w-32 tracking-wider">Email：</span>
                        <span class="text-gray-200">{{ user.email }}</span>
                    </div>
                </li>
                
            </ul>
        </div>
    </template>
</template>

<style lang="scss" scoped>
</style>
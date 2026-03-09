<script setup lang="ts">
    import { ref, onMounted, watch} from 'vue';
    import { useRoute } from 'vue-router';
    import { useGames } from '../composable/usegames';
    import { useNews } from '../composable/usenews';
    import { Button } from '@/components/ui/button'

    
    const route = useRoute();
    const { games, fetchGameById } = useGames();
    const { news, fetchNews } = useNews();
    const gameData = ref<any>(null);

    const loadGame = async (id: string) => {
    if (id) {
        gameData.value = await fetchGameById(id);
        await fetchNews(id);
    }
    };
    

    onMounted(async () => {
        // const id = route.params.id as string;
        // gameData.value = await fetchGameById(id);
        loadGame(route.params.id as string);
    });

    watch(
        () => route.params.id,
        (newId) => {
            loadGame(newId as string);
        }
    );
</script>

<template>
    <div v-if="gameData"  class="!px-4 md:basis-1/2 lg:basis-1/3">
        <img :src="gameData.imageurl" class="w-full h-auto max-w-xl !mx-auto object-contain drop-shadow-2xl transition-transform duration-100 hover:scale-105 rounded-3xl overflow-hidden">
    </div>

    <div class="news w-full max-w-4xl mx-auto px-10 mt-12 mb-20">
            <div class="text-4xl font-bold mb-6 border-l-8 border-yellow-400 pl-4 translate-x-35 !mt-4">
            熱門消息：
            </div>

            <ul class="flex flex-col  text-cen translate-x-45 w-full !mt-4">
                <li v-for="message in news" :key="message.newsId" class="block w-full bg-white/5 rounded-xl text-xl hover:bg-white/10 hover:text-yellow-300 transition-all flex items-center !mb-4 !p-4"">
                    <span class=" ">📢</span>
                    <Button variant="outline" class="uppercase font-bold tracking-wider text-black transition-colors !p-4  !bg-white/20 hover:!bg-white/80 cursor-pointer !mr-2 !ml-2">
                            # {{ message.gameId }}
                    </Button>
                    <a :href="message.url" target="_blank" >
                        {{ message.title }}
                    </a>
                    <!-- <router-link :to="`/game/${message.gameId}/news/${message.newsId}`"  class="block w-full bg-white/5 p-4 rounded-xl text-xl hover:bg-white/20 hover:text-yellow-300 transition-all flex items-center"> -->
                    
                    <!-- </router-link> -->
                </li>
            </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>

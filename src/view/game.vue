<script setup lang="ts">
    import { ref, onMounted, watch} from 'vue';
    import { useRoute } from 'vue-router';
    import { useGames } from '../Composable/usegames';
    
    const route = useRoute();
    const { games, fetchGameById } = useGames();
    const gameData = ref<any>(null);

    const loadGame = async (id: string) => {
    if (id) {
        gameData.value = await fetchGameById(id);
    }
    };
    watch(
        () => route.params.id,
        (newId) => {
            loadGame(newId as string);
        }
    );

    onMounted(async () => {
        const id = route.params.id as string;
        gameData.value = await fetchGameById(id);
        loadGame(route.params.id as string);
    });

    
    const news = [
    { id: 1, name: '消息一', news: '#' },
    { id: 2, name: '消息二', news: '#' },
    { id: 3, name: '消息三', news: '#' },
    { id: 4, name: '消息四', news: '#' },
    { id: 5, name: '消息五', news: '#' },
    ];
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
                <li v-for="message in news" :key="message.id" class="w-full !mb-8 ">
                    <a :href="message.news" class="block w-full bg-white/5 p-4 rounded-xl text-xl hover:bg-white/20 hover:text-yellow-300 transition-all flex items-center">
                        <span class="text-2xl !pt-2 !pb-2 !pl-2">📢</span>
                        {{message.name}}
                    </a>
                </li>
            </ul>
        </div>
</template>

<style lang="scss" scoped>
</style>

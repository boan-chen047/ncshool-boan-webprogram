<script setup lang="ts">
    import { Card, CardContent } from '@/components/ui/card'
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
    import Autoplay from 'embla-carousel-autoplay'
    import { ref, onMounted } from 'vue';
    import { useGames } from '../Composable/usegames';

    const { games, fetchGames } = useGames();
    
    onMounted(() => {
        fetchGames();
    });

    const news = [
    { id: 1, name: '消息一', news: '#' },
    { id: 2, name: '消息二', news: '#' },
    { id: 3, name: '消息三', news: '#' },
    { id: 4, name: '消息四', news: '#' },
    { id: 5, name: '消息五', news: '#' },
    ];

    const plugin = Autoplay({
    delay: 3000, // 3000ms = 3秒換下一張
    stopOnInteraction: false, // 手指滑動後，要不要停止自動播放？(false = 繼續自動播)
    })

</script>

<template>
    <main>
        <div class="text-4xl font-bold mb-6 border-l-8 border-red-400 pl-4 translate-x-35 !mt-4">熱門遊戲:</div>
        <div class="flex w-full justify-center py-12">
            

            <Carousel
                class="w-full max-w-3xl  px-10 !mt-4"
                :plugins="[ plugin]"
                :opts="{
                align: 'start',
                loop: true,
                }"
                @mouseenter="plugin.stop"
                @mouseleave="plugin.reset"
            >
                <CarouselContent class="!-ml-4">
                    <CarouselItem v-for="game in games" :key="game.id" class="!px-4 md:basis-1/2 lg:basis-1/3">
                    <router-link :to="`/game/${game.docId}`" class="cursor-pointer block">
                        <div class="p-3 bg-transparent">
                        <Card class="bg-white/10 border-none rounded-3xl overflow-hidden shadow-lg h-full">
                            <CardContent class="flex flex-col items-center justify-center  h-full bg-transparent">
                            <!-- <span class="text-2xl font-semibold">{{ game.name }}</span> -->
                                <img :src="game.imageurl" class="w-full h-56 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110 rounded-3xl overflow-hidden">
                                <span class=" text-lg font-bold tracking-wider text-center text-white !whitespace-nowrap !mb-4">{{ game.id }}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </router-link>
                    </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious class="-left-12 bg-transparent" />
                    <CarouselNext class="-right-12 bg-transparent" />
                    
                </Carousel>
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
    </main>
</template>

<style lang="scss" scoped>
   
</style>

<script setup lang="ts">
    import { Card, CardContent } from '@/components/ui/card'
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
    import Autoplay from 'embla-carousel-autoplay'
    import { ref, onMounted } from 'vue';
    import { useGames } from '../bb/usegames';
    import { useNews } from '../bb/usenews';
    import { Button } from '@/components/ui/button';
    import type router from '@/router';

    const { games, fetchGames } = useGames();
    const { news, fetchNews } = useNews();
    
    onMounted(() => {
        fetchGames();
        fetchNews();
    });
    const plugin = Autoplay({
    delay: 2000,
    stopOnInteraction: false, 
    })

</script>

<template>
    <main>
        <div class="text-4xl font-bold mb-6 border-l-8 border-red-400 pl-4 translate-x-35 !mt-4">Popular Games:</div>
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

        <div class="news w-full max-w-4xl mx-auto !pb-10 ">
            <div class="text-4xl font-bold mb-6 border-l-8 border-yellow-400 pl-4 translate-x-35 !mt-4">
            News：
            </div>

            <ul class="flex flex-col  text-cen translate-x-45 w-full !mt-4">
                <li v-for="message in news" :key="message.newsId" class=" w-full bg-white/5 rounded-xl text-xl hover:bg-white/10 hover:text-yellow-300 transition-all flex items-center !mb-4 !p-4">
                    <span>📢</span>
                    <router-link
                        :to="`/game/${message.gameId}`"
                        class="!mr-2 !ml-2 z-10"
                        @click.stop
                    >
                        <Button variant="outline" class="uppercase font-bold tracking-wider text-black transition-colors !p-4  !bg-white/20 hover:!bg-white/80 cursor-pointer">
                            # {{ message.gameId }}
                        </Button>                
                    </router-link>
                    <a :href="message.url" target="_blank" >
                        {{ message.title }}
                    </a>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
   
</style>

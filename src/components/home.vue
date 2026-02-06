<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const games = [
  { id: 1, name: '遊戲一', icon: '/icon.png' },
  { id: 2, name: '遊戲二', icon: '/icon.png' },
  { id: 3, name: '遊戲三', icon: '/icon.png' },
  { id: 4, name: '遊戲四', icon: '/icon.png' },
  { id: 5, name: '遊戲五', icon: '/icon.png' },
  { id: 6, name: '遊戲六', icon: '/icon.png' },
  { id: 7, name: '遊戲七', icon: '/icon.png' },
  { id: 8, name: '遊戲八', icon: '/icon.png' },
  { id: 9, name: '遊戲九', icon: '/icon.png' },
  { id: 10, name: '遊戲十', icon: '/icon.png' },
];

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
        <div class="text-4xl font-bold mb-6 border-l-8 border-red-400 pl-4">熱門遊戲:</div>
        <div class="flex w-full justify-center py-12">
            

            <Carousel
                class="w-full max-w-3xl  px-10"
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
                        <div class="p-3 bg-transparent">
                        <Card class="bg-white/10 border-none rounded-3xl overflow-hidden shadow-lg h-full">
                            <CardContent class="flex flex-col items-center justify-center gap-4 p-6 pt-6 pb-2 h-full bg-transparent">
                            <!-- <span class="text-2xl font-semibold">{{ game.name }}</span> -->
                                <img src="/icon.png" class="w-32 h-48 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110 rounded-3xl overflow-hidden">
                                <span class=" text-4xl font-bold tracking-wider ">{{ game.name }}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious class="-left-12 bg-transparent" />
                    <CarouselNext class="-right-12 bg-transparent" />
                    
                </Carousel>
                </div>

        <div class="news w-full max-w-3xl mx-auto px-10 mt-12 mb-20">
            <div class="text-4xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
            熱門消息：
            </div>

            <ul class="flex flex-col gap-4 text-cen">
                <li v-for="message in news" :key="message.id" class="w-full ">
                    <a :href="message.news" class="block w-full bg-white/5 p-4 rounded-xl text-xl hover:bg-white/20 hover:text-yellow-300 transition-all flex items-center">
                        <span class="mr-4 text-yellow-500">📢</span>
                        {{message.name}}
                    </a>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    // .ad{
    //     min-height: 100px;
    // }
    // .games{
    //     min-height: 800px;
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     background-color: lightblue;
    //     padding: 50px 30px;
    //     .topic{
    //         font-size: 50px;
    //         padding: 0 0 20px 0
    //     }
    //     .gamegroup {
    //         display: grid;
    //         grid-template-columns: repeat(5, 1fr); 
    //         grid-template-rows: repeat(2, 1fr);
    //         flex: 1;
    //         list-style: none;
    //         padding: 0;
    //         gap: 20px;

    //         .gameblog{
    //             align-items: center;  
    //             justify-content: space-evenly;
    //             height: 100%;
    //             width: 100%;
    //             .imgcontainer {
    //                 width: 100%;         
    //                 height: 80%;
    //                 overflow: hidden;
    //                 .game_picture {
    //                     width: 100%;
    //                     height: 100%;
    //                     object-fit: contain; 
    //                 }
    //             }
    //             .gamename{
    //                 height: 20%;
    //                 width: 100%;
    //                 align-items: center;    
    //                 padding-top: 10px;
    //                 display: flex;         
    //                 justify-content: center; 
    //                 align-items: flex-start; 
    //             }
    //         }
    //     }
    // }
    
    // .news{
    //     min-height: 600px;
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     background-color: lightgreen;
    //     padding: 50px 30px;
    //     .topic{
    //         font-size: 50px;
    //         padding: 0 0 20px 0
    //     }
    //     .newsgroup {
    //         display: grid;
    //         grid-template-rows: repeat(5, 1fr);
    //         flex: 1;
    //         list-style: none;
    //         padding: 0;
    //         gap: 10px;
    //         .newsblog{
    //             align-items: center;    /* 水平置中 */
    //             justify-content: flex-start;
    //             height: 100%;
    //             width: 100%;
    //             .newsname{
    //                 height: 100%;
    //                 width: 100%;
    //                 align-items: center;    /* 水平置中 */
    //                 padding-top: 10px;
    //                 display: flex;         /* 使用 Flexbox 控制內部文字 */
    //                 justify-content: flex-start; /* 1. 水平置中 */
    //                 font-size: 25px;
    //             }
    //         }
    //     }
    // }
</style>

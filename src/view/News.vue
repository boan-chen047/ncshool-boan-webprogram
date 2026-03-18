  <script setup lang="ts">
      import { onMounted } from 'vue';
      import { useNews } from '../composable/usenews';
      import { Button } from '@/components/ui/button';
      const { news, fetchNews } = useNews();

      onMounted(() => {
          // 這裡不傳入任何 id，代表要觸發「抓取全站最新新聞」的邏輯
          fetchNews();
      });
  </script>

  <template>
      <main class="w-full max-w-4xl mx-auto !pb-10 !pt-6">
          <div class="text-4xl font-bold  border-l-8 border-yellow-400 pl-4 translate-x-35 !mt-4 !mb-8">
              📰 News：
          </div>

          <div v-if="news.length === 0" class="text-4xl font-bold mb-6 border-l-8 border-yellow-400 pl-4 translate-x-35 !mt-4">
              Loading...
          </div>

          <ul class="flex flex-col  text-cen translate-x-45 w-full !mt-4">
                <li v-for="message in news" :key="message.newsId" class=" w-full bg-white/5 rounded-xl text-xl hover:bg-white/10 hover:text-yellow-300 transition-all flex items-center !mb-6 !p-4">
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
      </main>
  </template>

  <style lang="scss" scoped>
  </style>
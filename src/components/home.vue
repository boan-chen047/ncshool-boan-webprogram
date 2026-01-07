<script setup lang="ts">
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
  { id: 1, name: '消息一', icon: '/icon.png' },
  { id: 2, name: '消息二', icon: '/icon.png' },
  { id: 3, name: '消息三', icon: '/icon.png' },
  { id: 4, name: '消息四', icon: '/icon.png' },
  { id: 5, name: '消息五', icon: '/icon.png' },
];
</script>

<template>
    <main>
        <div class="ad">廣告</div>

        <div class="games">
            <div class="topic">熱門遊戲：</div>
            <ul class="gamegroup">
                <li v-for="game in games" :key="game.id" class="gameblog">
                    <div class="imgcontainer">
                        <img :src="game.icon" alt="game icon" class="game_picture">
                    </div>
                    <div class="gamename">{{ game.name }}</div>
                </li>
            </ul>
        </div>

        <div class="news">
            <div class="topic">熱門消息：</div>
            <ul class="newsgroup">
                <li v-for="message in news" :key="message.id" class="newsblog">
                    <div class="newsname">{{ message.name }}</div>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .ad{
        min-height: 100px;
    }
    .games{
        min-height: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: lightblue;
        padding: 50px 30px;
        .topic{
            font-size: 50px;
            padding: 0 0 20px 0
        }
        .gamegroup {
            display: grid;
            grid-template-columns: repeat(5, 1fr); 
            grid-template-rows: repeat(2, 1fr);
            flex: 1;
            list-style: none;
            padding: 0;
            gap: 20px;

            .gameblog{
                align-items: center;  
                justify-content: space-evenly;
                height: 100%;
                width: 100%;
                .imgcontainer {
                    width: 100%;         
                    height: 80%;
                    overflow: hidden;
                    .game_picture {
                        width: 100%;
                        height: 100%;
                        object-fit: contain; 
                    }
                }
                .gamename{
                    height: 20%;
                    width: 100%;
                    align-items: center;    
                    padding-top: 10px;
                    display: flex;         
                    justify-content: center; 
                    align-items: flex-start; 
                }
            }
        }
    }
    
    .news{
        min-height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: lightgreen;
        padding: 50px 30px;
        .topic{
            font-size: 50px;
            padding: 0 0 20px 0
        }
        .newsgroup {
            display: grid;
            grid-template-rows: repeat(5, 1fr);
            flex: 1;
            list-style: none;
            padding: 0;
            gap: 10px;
            .newsblog{
                align-items: center;    /* 水平置中 */
                justify-content: flex-start;
                height: 100%;
                width: 100%;
                .newsname{
                    height: 100%;
                    width: 100%;
                    align-items: center;    /* 水平置中 */
                    padding-top: 10px;
                    display: flex;         /* 使用 Flexbox 控制內部文字 */
                    justify-content: flex-start; /* 1. 水平置中 */
                    font-size: 25px;
                }
            }
        }
    }
</style>

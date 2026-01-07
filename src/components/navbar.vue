<script setup lang="ts">
  
</script>

<template>
    <header class="navbar">
        <div>
           
            <router-link to="/" > <img src="/icon.png"  class="icon"></router-link>
        </div>
        <nav>
            <ul class="navlink">
                <li class="btn"><router-link to="\game" >熱門遊戲</router-link></li>
                <li class="btn">登入/註冊</li>
                <li class="btn">聯絡我們</li>
            </ul>
        </nav>
    </header>
    <main>

    </main>
</template>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .icon {
    height: 60px;    
    width: auto;     
    object-fit: contain; 
    }
    .navbar{
        display: flex;  
        height: 80px;
        width: 100%;              
        justify-content: space-between; 
        align-items: center;         
        padding: 20px 30px;
        background-color: #ffffff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        position: sticky;             
        top: 0;
        z-index: 1000;
    }
    .navlink {
        display: flex;       
        list-style: none;    
        a{
            text-decoration: none;
            color: black;
        }
    }
    .btn{
        padding: 20px;
        font-size: 20px;
        :hover{
            color: #007bff;
        }
    }
</style>

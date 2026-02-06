<script setup lang="ts">
    import Nav from './components/navbar.vue';
  
</script>

<template >
  <div class="min-h-screen bg-slate-900 text-white font-sans antialiased">
      <Nav />
      <router-view />
  </div>
</template>

<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


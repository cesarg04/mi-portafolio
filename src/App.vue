<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header/Header.vue'

components:{
  Header
}
</script>

<template>
  <Header />

  <div class="pt-24 px-3 x-10">
    <router-view />
  </div>

  
</template>



<style scoped>
  
</style>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header/Header.vue';
import Footer from './components/footer/Footer.vue'
import { ref } from 'vue';

const toggle = ref(true);

const headerToggle = (id) => {
  toggle.value = id
} 

components:{
  Header,
  Footer
}
</script>

<template>
  <Header @action="headerToggle" />

  <div class="pt-24 px-3 x-10 md:pl-24 md:pr-24" :class="{'my-36': !toggle}">
    <router-view />
  </div>
  
  <Footer />
</template>



<style scoped>
  
</style>

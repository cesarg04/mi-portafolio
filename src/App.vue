<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header/Header.vue';
import Footer from './components/footer/Footer.vue'
import { onBeforeMount, ref } from 'vue';
import themeStore from './store/index';

const Theme = themeStore();

onBeforeMount(() => {
    Theme.initTheme();
});

const toggle = ref(true);

const headerToggle = (id) => {
  toggle.value = id
}


components: {
  Header,
    Footer
}
</script>

<template>
<div class="dark:bg-bgDark">
    <Header @action="headerToggle" />

  <div class="pt-24 px-3 x-10 md:pl-24 md:pr-24" :class="{ 'my-36': !toggle }">
    <router-view v-slot="{ Component, route }">
      <Transition 
      name="fade"
      mode="out-in"
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
      >
        <Component :is="Component" />
      </Transition>
    </router-view>
  </div>

  <Footer />
</div>

</template>



<style scoped>
.fade-enter-form,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}


</style>

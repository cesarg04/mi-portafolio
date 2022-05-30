<script setup>
import { isRef, onBeforeMount, ref, watch} from "vue";
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue';

const router = useRouter()
const toggle = ref(true)
const emit = defineEmits(['action'])

watch(toggle, (val) => {
  const action = emit('action', val)
  
})

const nav = [
    {
        id: 1,
        title: 'Proyectos',
        href: '/proyectos'
    },
    {
        id: 2,
        title: 'Conoceme',
        href: '/conoceme'
    },
    {
        id: 3,
        title: 'Contacto',
        href: '/contacto'
    }
];

</script>

<template>

    <header class="bg-white flex flex-col border fixed top-0 left-0 right-0 z-20 md:pl-24 md:pr-28">

        <div class="flex flex-row h-20 justify-between">
           
                <div class="bg-backicons self-center flex ml-2 border rounded cursor-pointer md:hidden" @click="toggle = !toggle, action" >
                    <span class="material-symbols-outlined mx-2 my-2 flex" :class="{'hidden': !toggle}" >menu</span>
                    <span class="material-symbols-outlined mx-2 my-2 " :class="{'hidden': toggle}">close</span>
                </div>
          
                <div class="self-center cursor-pointer md:flex" @click="router.push('/')">
                <img src="../../assets/logo/logo.png" alt="" class="h-12 ">
                    <h1 class="font-rubik font-semibold px-3 py-3 text-2xl hidden md:flex">CesarGarciaDev</h1>
                    
                </div>

                <nav class="flex flex-row justify-between self-center hidden md:flex ">
                    <router-link 
                        @click="toggle === false"
                        v-for="item in nav" 
                        :key="item.id" 
                        :to="item.href"
                        class="mx-10 font-md font-rubik text-lg font-medium md:pl-4">
                        {{ item.title }}
                    </router-link>
                </nav>

                <div class="bg-backicons border cursor-pointer rounded self-center mr-2">
                    <span class="material-symbols-outlined mx-2 my-2">dark_mode</span>
                </div>  
        </div>

        <div>
            <nav class="flex flex-col md:hidden " :class="{'hidden': toggle}" >
            <router-link 
            v-for="item in nav" 
            :key="item.id" 
            :to="item.href"
            class="py-2 pl-5 mx-1 my-1 rounded  hover:bg-backicons ">
            {{ item.title }}
            </router-link>
            
            </nav>
        </div>
    </header    >

</template>

<style scoped>

</style>
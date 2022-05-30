<script setup>
import { projectsWork, projectPersonal } from "../composables/projects";

</script>

<template>
  <div class="px-4">
    <div>
      <h1 class="font-bold text-4xl text-center font-rubik">
        Portafolio de Proyectos
      </h1>
      <h1
        class="text-center foont-rubik text-xl text-h1Secondary font-semibold"
      >
        Algunos proyectos que realizado
      </h1>
    </div>
    <div class="flex flex-col mx-4 mt-20 md:flex-row md:flex-wrap md:justify-center">
      <div v-for="item in projectsWork" :key="item" class="cards">
        <router-link :to="item.to">
          <div class="px-4">
            <img :src="item.logo" :alt="item.tittle" class="rounded boder" />
          </div>
          <h1 class="h1-cards">{{ item.tittle }}</h1>
          <div class="mb-10">
            <h2
              v-for="index in item.tecnologys"
              :key="index"
              class="
                font-semibold
                text-1xl text-center
                font-rubik
                text-h1Secondary
              "
            >
              {{ index }}
            </h2>
          </div>
        </router-link>
      </div>

      <div v-for="item in projectPersonal" :key="item" class="cards">
        <router-link :to="item.to">
          <div class="">
            <img :src="item.logo" :alt="item.tittle" class="rounded boder" />
          </div>
          <h1 class="h1-cards">{{ item.tittle }}</h1>
          <div class="mb-10">
            <h2
              v-for="index in item.tecnologys"
              :key="index"
              class="
                font-semibold
                text-1xl text-center
                font-rubik
                text-h1Secondary
              "
            >
              {{ index }}
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  @apply text-projectsh1;
}
.h1-cards {
  @apply font-semibold text-3xl text-center font-rubik my-2;
}
.cards{
    @apply overflow-hidden shadow-xl mt-20 border-t rounded-md md:w-72 xl:w-72 md:mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300;
}
</style>
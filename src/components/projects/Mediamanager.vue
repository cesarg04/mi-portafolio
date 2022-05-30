<script setup>
import { projectsWork, projectPersonal } from "../../composables/projects";
</script>
<template>
  <div class="border mt-10 rounded h-72">
    <div>
      <h1 class="font-rubik font-semibold text-2xl text-center pt-10">
        Mediamanager
      </h1>
      <div>Hola</div>
    </div>
    <div class="border mt">
      <div v-for="item in projectsWork" :key="item">
        <img :src="item.logo" alt="" class="w-full" />

        <h1 class="font-3xl">
          {{ item.tittle }}
        </h1>
      </div>
    </div>
  </div>
</template>
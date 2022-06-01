<script setup>
import { Icon } from "@iconify/vue";
import Skils from "../components/skils/Skils.vue";

components: {
  Skils;
}
</script>

<template>
  <div class="w-full">
    <div
      class="
        grid
        text-3xl
        justify-items-center
        md:grid md:grid-cols-3 md:mt-10 md:gap-x-1
      "
    >
      <div class="flex flex-col">
        <!-- TITLE -->
        <div class="md:w-34 mb-10 md:max-h-50">
          <h1 class="h1-home ">Hola, soy Cesar Garcia Dev</h1>
          <h1 class="h1-home text-h1Secondary">FullStack developer</h1>
        </div>
        <!-- Button download CV -->
        <div class="flex justify-center">
          <button
            class="
              bg-primarybutton
              rounded-full
              border
              px-3
              btn-down
              transition
              ease-in-out
              delay-150
              hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
              duration-300
            "
          >
            <span
              class="
                material-symbols-outlined
                align-middle
                text-h1Secondary text-md
                mr-2
              "
              >download_for_offline</span
            >
            <span
              class="
                font-rubik
                align-middle
                text-h1Secondary
                download
                ease-in
                duration-300
              "
              >Descargar CV</span
            >
          </button>
        </div>
      </div>
      <div class="w-full mt-4 md:mt-1 md:col-span-2">
        <img src="../assets/fondo/developer.1e987b35.svg" alt="" class="" />
      </div>
    </div>

    <Skils />
  </div>
</template>
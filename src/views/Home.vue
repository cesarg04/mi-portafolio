<script setup>
import { Icon } from "@iconify/vue";
import Skils from "../components/skils/Skils.vue";
import themeStore from '../store';


const Theme = themeStore();

</script>

<template>
  <div class="w-full">
    <div class="
        grid
        text-3xl
        justify-items-center
        md:grid md:grid-cols-3 md:mt-10 md:gap-x-1
      ">
      <div class="flex flex-col">
        <!-- TITLE -->
        <div class="md:w-34 mb-10 md:max-h-50">
          <h1 class="h1-home dark:text-white">Hola, soy Cesar Garcia Dev</h1>
          <h1 class="h1-home text-h1Secondary">FullStack developer</h1>
        </div>
        <!-- Button download CV -->
        <div class="flex justify-center">
          <button class="
              bg-primarybutton
              h-15
              rounded-full
              border
              px-3
              btn-down
              transition
              ease-in-out
              delay-150
              pb-2
              hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
              duration-300
              dark:bg-bgSecondaryDark
              dark:border-bgDark
              dark:hover:bg-indigo-500
            ">
            <a href="https://drive.google.com/file/d/1DkBuRqwo_XeL6CcZw-Aov-76BguJrurQ/view?usp=drive_link"
              target="_blank">
              <span class="
                material-symbols-outlined
                align-middle
                text-h1Secondary text-md
                mr-2
              ">download_for_offline</span>
              <span class="
                font-rubik
                align-middle
                text-h1Secondary
                download
                ease-in
                duration-300
              ">Descargar CV</span>

            </a>

          </button>
        </div>
      </div>
      <div class="w-full mt-4 md:mt-1 md:col-span-2">

        <img v-if="Theme.theme === 'light'" src="../assets/fondo/developer.1e987b35.svg" alt="" class="" />
        <img v-else src="../assets/fondo/developer-dark.svg" alt="developer">

      </div>
    </div>

    <Skils />
  </div>
</template>
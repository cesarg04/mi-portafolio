<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="mt-10 grid grid-rows-2 justify-items-center pb-5">
    <div class="text-center mb-10">
      <h1 class="font-semibold text-3xl dark:text-white">Sígueme</h1>
    </div>

    <div class="grid grid-cols-3 justify-items-center w-52">
      <div class="icons-bg">
        <a href="https://github.com/elduro2002" target="_blank">
          <Icon icon="akar-icons:github-fill" class="icon-config" />
        </a>
      </div>
      <div class="icons-bg">
        <a href="https://www.instagram.com/cesarg23_/" target="_blank"
          ><Icon icon="akar-icons:instagram-fill" class="icon-config"
        /></a>
      </div>
      <div class="icons-bg">
        <a
          href="https://www.linkedin.com/in/cesar-alberto-garcia-966626219/"
          target="_blank"
          ><Icon icon="eva:linkedin-outline" class="icon-config"
        /></a>
      </div>
    </div>

    <div class="flex flex-col mt-10 text-center">
      <span class="text-xl dark:text-white">© Copyright. 2022 CesarGarciaDev</span>
    </div>

  </div>
</template>
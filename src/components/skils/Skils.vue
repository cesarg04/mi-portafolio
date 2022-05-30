<script setup>
import skils from "../../composables/skils";
</script>

<template>
  <div
    class="flex flex-col mx-4 mt-20 md:flex-row md:flex-wrap md:justify-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="2000"
  >
    <div v-for="item in skils" :key="item.id" class="cards">
      <div class="mt-2">
        <h1 class="text-center text-3xl font-rubik font-semibold">
          {{ item.name }}
        </h1>
      </div>

      <div class="mt-10">
        <img :src="item.logo" :alt="item.name" class="mx-auto w-3/12" />
      </div>
      <div class="mt-5 mb-8">
        <li
          v-for="index in item.description"
          :key="index"
          class="
            font-rubik font-semibold
            text-center
            list-none
            text-h1Secondary
          "
        >
          {{ index }}
        </li>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards{
    @apply overflow-hidden shadow-xl mt-20 border-t rounded-md md:w-72 xl:w-72 md:mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300;
}

</style>
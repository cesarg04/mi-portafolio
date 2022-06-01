<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <h1 class="font-rubik font-semibold text-3xl text-center">Crypto App</h1>

    <div class="flex flex-row mt-6:">
      <div class="flex items-center sm:mx-4">
        <Icon icon="akar-icons:clock" class="text-xl" />
        <span class="font-rubik mx-2 text-xl"> 12, Sept, 2021</span>
      </div>

      <div class="flex items-center sm:mx-4">
        <Icon icon="akar-icons:tag" class="text-xl" />
        <span class="font-rubik mx-2 text-xl">Frontend Developer</span>
      </div>
    </div>

    <div>
      <div class="rounded-lg p-2 mt-4">
        <img
          src="../../assets/projects/Crypto-app/logo.png"
          alt="mediamanager"
          class="rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div class="mt-6 md:grid md:grid-cols-3">
      <div>
        <div class="flex flex-col">
          <h1 class="h1">Proyecto Personal</h1>
        </div>

        <div class="mt-6">
          <h1 class="h1">Tecnologias impementadas</h1>
          <span>Vue Js, Bootstrap, Axios</span>
        </div>
      </div>

      <div class="mt-6 md:col-span-2 mx-10">
        <h1 class="h1">Acciones Realizadas</h1>
        <p class="font-rubik text-xl">
          Es una pequeña aplicación construida e n Vue js, lo cual tiene como
          función es recopilar los precios actuales de las principales
          criptomonedas.
          <br />
          <br />
          Esta hecho en la parte del diseño con bootstrap, los datos de las
          criptomonedas se obtionen consumiendo una API publica de Coineco.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  @apply font-rubik text-lg;
}

.h1 {
  @apply font-semibold text-2xl font-rubik;
}
</style>
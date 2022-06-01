<script setup>
import { projectsWork, projectPersonal } from "../../composables/projects";
import { Icon } from "@iconify/vue";
</script>
<template>
  <div>
    <div>
      <h1 class="font-semibold text-3xl text-center font-rubik">
        Mediamanager
      </h1>

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

      <div class="flex flex-col sm:flex-row">
        <div class="rounded-lg p-2 mt-4">
          <img
            src="../../assets/projects/Mediamanager/image-mediamanager.png"
            alt="mediamanager"
            class="rounded-lg shadow-lg"
          />
        </div>

        <div class="rounded-lg p-2 mt-4">
          <img
            src="../../assets/projects/Mediamanager/image2-mediamanager.png"
            alt="mediamanager"
            class="rounded-lg shadow-lg"
          />
        </div>

        <div class="rounded-lg p-2 mt-4">
          <img
            src="../../assets/projects/Mediamanager/image3-mediamanager.png"
            alt="mediamanager"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <!-- Write Section -->
    <div class="mt-6 md:grid md:grid-cols-3">
      <div>
        <div class="flex flex-col">
          <h1 class="h1">Empresa</h1>
          <span>Nombre: eforte</span>
          <span>Sercicio: Desarrollador Frontend</span>
          <span>Website: eforte.it</span>
          <span>Telefono: (+39) 320.0583088</span>
        </div>

        <div class="mt-6">
          <h1 class="h1">Tecnologias impementadas</h1>
          <span>Vue Js, Fabric Js, Vuetify, Axios, Vuex</span>
        </div>
      </div>

      <div class="mt-6 md:col-span-2 mx-10">  
        <h1 class="h1">Acciones Realizadas</h1>
        <p class="font-rubik text-xl">
          Es una aplicación web hecha en Lavavel y Vue js, su funcion es
          administrar monitores comerciales que estan ubicados en distintas
          partes de Italia, cuenta con un editor de imagenes hecho con una
          libreria de javascript llamada Facric JS. Mi funcion es dar soporte al
          codigo ya existente, implementar nuevas soluciones y solucionar
          problemas.
          <br />
          <br />
          He estado desempeñando el rol de desarrollador frontend en esta
          aplicación desde agosto de 2021, implementando nuevas funcionalidades y
          corrigiendo errores tanto de logica de la aplicación como de diseño,
          teniendo retos como el de la refactorizacion del codigo e implementacion de unit testing.
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
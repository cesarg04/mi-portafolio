<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <h1 class="font-rubik font-semibold text-3xl text-center dark:text-white">
      TodoList
    </h1>

    <div class="flex flex-row mt-6:">
      <div class="flex items-center sm:mx-4">
        <Icon icon="akar-icons:clock" class="text-xl dark:text-white" />
        <span class="font-rubik mx-2 text-xl dark:text-white">
          20, jun, 2022</span
        >
      </div>

      <div class="flex items-center sm:mx-4">
        <Icon icon="akar-icons:tag" class="text-xl dark:text-white" />
        <span class="font-rubik mx-2 text-xl dark:text-white"
          >FullStack Developer</span
        >
      </div>
    </div>

    <div class="flex content-center flex-col sm:flex-row">
      <div class="rounded-lg p-2 mt-4">
        <img
          src="../../assets/projects/Todolist/fondoapp.png"
          alt="mediamanager"
          class="rounded-lg shadow-lg border"
        />
      </div>
      <div class="rounded-lg p-2 mt-4">
        <img
          src="../../assets/projects/Todolist/todolist.png"
          alt="mediamanager"
          class="rounded-lg shadow-lg border"
        />
      </div>
    </div>

    <div class="mt-6 md:grid md:grid-cols-3">
      <div>
        <div class="flex flex-col dark:text-white">
          <h1 class="h1">Proyecto Personal</h1>
        </div>

        <div class="mt-6">
          <h1 class="h1 dark:text-white">Tecnologias impementadas</h1>
          <span class="dark:text-white"
            >Vue Js, Pinia, Tailwindcss, ExpressJs, MongoDb</span
          >
        </div>
      </div>

      <div class="mt-6 md:col-span-2 mx-10">
        <h1 class="h1 dark:text-white">Acciones Realizadas</h1>
        <p class="font-rubik text-xl dark:text-white">
          Es una aplicacion en la que se puede registrar un usuario, y este
          puede almacenar sus tareas diarias, el usuario puede crear, modificar,
          actualizar y eliminar tareas con facilidad.
          <br />
          <br />
          Esta construida con ExpressJs en el backend, MongodDb en la base de
          datos y Vue js 3 en frontend, implementando las ultimas
          funcionalidades del framework como,
          <span class="text-blue-500">Pinia</span>, el nuevo metodo de manejo
          global en Vue.
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

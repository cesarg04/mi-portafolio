<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
    <div>
        <h1 class="font-rubik font-semibold text-3xl text-center dark:text-white">Prestamigo</h1>

        <div class="flex flex-row mt-6:">
            <div class="flex items-center sm:mx-4">
                <Icon icon="akar-icons:clock" class="text-xl dark:text-white" />
                <span class="font-rubik mx-2 text-xl dark:text-white"> 01, agosto, 2022</span>
            </div>

            <div class="flex items-center sm:mx-4">
                <Icon icon="akar-icons:tag" class="text-xl dark:text-white" />
                <span class="font-rubik mx-2 text-xl dark:text-white">Frontend Developer</span>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row">
            <div class="rounded-lg p-2 mt-4">
                <img
                    src="../../assets/projects/Prestamigo/dashboard.png"
                    class="rounded-lg shadow-lg" />
            </div>
            <div class="rounded-lg p-2 mt-4">
                <img
                    src="../../assets/projects/Prestamigo/app.png"
                    class="rounded-lg shadow-lg h-96 w-80" />
            </div>
            
        </div>

        <div class="mt-6 md:grid md:grid-cols-3">
            <div>
                <div class="flex flex-col dark:text-white">
                    <h1 class="h1">Proyecto Freelance</h1>
                </div>

                <div class="mt-6">
                    <h1 class="h1 dark:text-white">Tecnologias impementadas</h1>
                    <span class="dark:text-white">Ionic, Vue js, React, Tailwindcss, Axios</span>
                </div>
            </div>

            <div class="mt-6 md:col-span-2 mx-10">
                <h1 class="h1 dark:text-white">Acciones Realizadas</h1>
                <p class="font-rubik text-xl dark:text-white">
                    Es una aplicacion de gestion de prestamos en donde los usuarios pueden 
                    pedir prestamos y ser rechazados o aporbados por un prestamista.
                    <br />
                    <br />
                    Esta construida en Ionic + Vue la aplicacion movil y en React y Tailwindcss el dashboard.
                </p>
            </div>
        </div>
    </div>

</template>

<style>
span {
  @apply font-rubik text-lg;
}

.h1 {
  @apply font-semibold text-2xl font-rubik ;
}

</style>
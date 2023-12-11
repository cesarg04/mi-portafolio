<script setup>
import { projectsWork, projectPersonal } from "../../composables/projects";
import { Icon } from "@iconify/vue";
</script>
<template>
    <div>
        <div>
            <h1 class="font-semibold text-3xl text-center font-rubik dark:text-white">
                Corpbanck CRM
            </h1>

            <div class="flex flex-row mt-6:">
                <div class="flex items-center sm:mx-4">
                    <Icon icon="akar-icons:clock" class="text-xl dark:text-white" />
                    <span class="font-rubik mx-2 text-xl dark:text-white"> 12, Sept, 2023</span>
                </div>

                <div class="flex items-center sm:mx-4">
                    <Icon icon="akar-icons:tag" class="text-xl dark:text-white" />
                    <span class="font-rubik mx-2 text-xl dark:text-white">Frontend Developer</span>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row ">
                <div class="rounded-lg p-2 mt-4">
                    <img src="../../assets/projects/corpbanck/first.png" alt="mediamanager"
                        class="rounded-lg shadow-lg" />
                </div>

                <div class="rounded-lg p-2 mt-4">
                    <img src="../../assets/projects/corpbanck/secnd.png" alt="mediamanager"
                        class="rounded-lg shadow-lg" />
                </div>

                <div class="rounded-lg p-2 mt-4">
                    <img src="../../assets/projects/corpbanck/3.png" alt="mediamanager"
                        class="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
        <!-- Write Section -->
        <div class="mt-6 md:grid md:grid-cols-3">
            <div>
                <div class="flex flex-col">
                    <h1 class="h1 dark:text-white">Empresa</h1>
                    <span class="dark:text-white">Nombre: Corpbanck</span>
                    <span class="dark:text-white">Sercicio: Desarrollador Frontend</span>
                    <span class="dark:text-white">Website: corpanck.com.do</span>
                    <span class="dark:text-white">Telefono: (809) 472-3232</span>
                </div>

                <div class="mt-6">
                    <h1 class="h1 dark:text-white">Tecnologias impementadas</h1>
                    <span class="dark:text-white">{{ projectsWork[1].tecnologys.join(', ') }}</span>
                </div>
            </div>

            <div class="mt-6 md:col-span-2 mx-10">
                <h1 class="h1 dark:text-white">Acciones Realizadas</h1>
                <p class="font-rubik text-xl dark:text-white">
                    Es un CRM de administracion de una emporesa inmobiliaria, su funcion es administrar todos los
                    porcedimientos de la eempresa tales com ventas, clientes, contactos etc.
                    <br />
                    <br />
                    Corpbanck RealEstate CRM es una plataforma de gestión integral diseñada específicamente para satisfacer
                    las necesidades de una empresa inmobiliaria líder como Corpbanck. Esta aplicación proporciona
                    herramientas avanzadas para gestionar eficientemente clientes, propiedades y transacciones, permitiendo
                    a Corpbanck optimizar sus procesos y mejorar la experiencia del cliente.
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
}</style>
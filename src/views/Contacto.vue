<script setup>
import { Icon } from "@iconify/vue";
import { getCurrentInstance, ref } from "vue";
import axios from 'axios'
import { inject } from 'vue'


const toast = inject('toast')

// Variables del correo
const nombre = ref("");
const correo = ref("");
const asunto = ref("");
const mensaje = ref("");
const toggleModal = ref(false);



const ToartsEmail = (reference) => {

    if (reference) {
        return toast.success(`Correo enviado correctamente`, {
        position: "bottom-right",
        duration: 3000,
        });
    }
    return toast.error(`Error al enviar el correo`, {
        position: "bottom-right",
        duration: 3000,
        });
    
}


const sendEmail = async () => {

    await axios.post('https://formspree.io/f/mqknnoao', {
        name: nombre.value,
        from: correo.value,
        _subject: asunto.value,
        message: mensaje.value
    })

        .then((response) => {
            ToartsEmail(true);
            nombre.value = ''
            correo.value = ''
            asunto.value = ''
            mensaje.value = ''
        })

        .catch((error) => {
            console.log(error);
            ToartsEmail(false);
        })


};

</script>

<template>

    <div class="px-6 sm:px-10 md:px-2 md:grid md:grid-cols-2 mt-20">

        <div class="shadow-lg w-full px-10 pb-10">
            <h1 class="font-rubik font-semibold text-2xl text-black dark:text-white">Contacto</h1>
            <form action="" role="form" method="POST" @submit.prevent="sendEmail">

                <div class="mt-4">
                    <label for="names" class="labels text-black dark:text-white">Nombre</label>
                    <input type="text" v-model="nombre" class="inputs" required />
                </div>

                <div class=".divsdivisors">
                    <label for="email" class="labels text-black dark:text-white">Correo</label>
                    <input type="email" v-model="correo" class="inputs" required>
                </div>

                <div class=".divsdivisors">
                    <label for="subject" class="labels text-black dark:text-white">Asunto</label>
                    <input type="text" v-model="asunto" class="inputs" required>
                </div>

                <div class=".divsdivisors">
                    <label for="message" class="labels text-black dark:text-white">Mensaje</label>
                    <textarea v-model="mensaje" name="message" id="" cols="14" rows="6"
                        class="bg-inputsbg w-full font-rubik text-lg"></textarea>
                </div>

                <div class=".divsdivisors mt-6">
                    <input type="submit" value="Enviar" class="buttons" :disabled="!nombre">
                </div>
            </form>

        </div>

        <!-- DETALLES DE CONTACTO -->

        <div class="mt-16 md:mt-2 md:mx-10">
            <h1 class="font-rubik text-2xl font-semibold text-black dark:text-white">Detalles de contacto</h1>
            <div class="mt-4">
                <div class="flex items-center my-2">
                    <Icon icon="akar-icons:location" class="text-lg text-black dark:text-white" />
                    <h1 class="h1contact text-black dark:text-white">Santo Domingo, Republica Dominicana.</h1>
                </div>

                <div class="flex items-center my-2">
                    <Icon icon="carbon:email" class="text-lg text-black dark:text-white" />
                    <h1 class="h1contact text-black dark:text-white">cesaralbertog47@gmail.com</h1>
                </div>

                <div class="flex items-center my-2">
                    <Icon icon="bi:telephone" class="text-lg text-black dark:text-white" />
                    <h1 class="h1contact text-black dark:text-white">+1 829-744-1835</h1>
                </div>



            </div>
        </div>


    </div>
</template>

<style scoped>
.inputs {
    @apply w-full px-5 py-2 border-0 rounded-md shadow-sm bg-inputsbg font-rubik text-lg dark:bg-inputsbg
}

.divsdivisors {
    @apply mb-10
}

.labels {
    @apply block font-rubik text-lg my-1 
}

.buttons {
    @apply px-4 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded-lg cursor-pointer
}

.h1contact {
    @apply font-rubik mx-2 text-lg text-black
}


</style>
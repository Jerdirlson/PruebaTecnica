<template>
    <div class=" bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 z-10 flex flex-row justify-center items-center">
        <div class="flex h-1/2 bg-white w-1/2 rounded-2xl flex-col">
            <div class="relative flex justify-center py-3 items-center">
                <span class="font-bold text-xl">
                    Añadir Nuevo Item
                </span>
                <span class="absolute top-3 right-5 font-bold cursor-pointer" @click="emits('onClose')">
                    x
                </span>
            </div>
            <div class="border py-2 flex flex-col px-5">
                <div class="">
                    Title:
                </div>
                <div >
                    <input type="text " class="border px-2 w-full">
                </div>
                <div class="pt-2">
                    Description:
                </div>
                <div>
                    <textarea class="border w-full resize-none">

                    </textarea>
                </div>
                <div class="flex pt-2">
                    <div class="w-1/5">
                        Color:
                    </div>
                    <div class="w-1/5">
                        <input type="color">
                    </div>
                    <div class="w-3/5 flex justify-end">
                        <boton title="Agregar" color="secondary"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import boton from '../components/boton.vue'
import { defineEmits } from 'vue';

const emits = defineEmits(['onClose'])

</script>

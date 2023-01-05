<script setup lang="ts">
import todocard from '../components/todocard.vue';
import dialogAdd from '../components/dialog.vue';
import boton from '../components/boton.vue';
import { ref } from 'vue';

const dialog = ref(false)

</script>

<template>
  <div class="flex w-full flex-col relative">
    <div class="flex w-full flex-wrap p-5">
      <div class="w-1/2">
        ToDo List
      </div>
      <div class="w-1/2 flex justify-end">
        <boton title="Añadir tarea" color="secondary" @click="dialog = true"/>
      </div>
    </div>
    <div class="flex w-full flex-row flex-wrap ">
      <div class="w-1/3 p-4">
        <div class="border flex-col w-full px-4 py-2 gap-2">
          <todocard />
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div class="border">

        </div>
      </div>
      <div class="w-1/3 p-4">
        <div class="border">

        </div>
      </div>
    </div>
    <dialogAdd v-if="dialog" @on-close="dialog= false"/>
  </div>
</template>

<template>
    <div class="flex flex-row px-1 border-l-4 py-1 mt-2" :style="{ 'border-color': task?.color }">
        <div class="flex flex-col w-4/5">
            <span class=" font-bold text-xl">
                {{ task?.title }}
            </span>
            <span class=" italic ">
                {{ task?.description }}
            </span>
        </div>
        <div class=" w-1/5 flex flex-row  items-center justify-center select-none">
            <div class="flex w-1/2 border justify-center" @click="emits('delete')">
                d
            </div>
            <div class="flex w-1/2 border justify-center" @click="emits('next')" v-if="!props.last">
                n
            </div>
        </div>
    </div>
</template>

<script setup lang ="ts">

import { defineProps, defineEmits } from 'vue';

interface cardProps {
    task?: {
        id: number
        title: string
        description: string
        color: string
    },
    last?: boolean
}

const emits = defineEmits(['delete', 'next'])

const props = defineProps<cardProps>()

</script>
<template>
    <span
        class="text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-opacity-80 hover:text-black duration-200"
        :class="props.color ? `bg-${props.color}` : `bg-primary`"
        >
        {{ props.title }}
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface buttonProps{
    title: string
    color?: "primary" | "secondary" | "third"
}

const props = defineProps<buttonProps>()

</script>



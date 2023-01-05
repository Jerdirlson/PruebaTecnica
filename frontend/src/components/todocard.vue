<template>
    <div class="flex flex-row px-1 border-l-4 py-1" :style="{ 'border-color': 'green' }">
        <div class="flex flex-col w-4/5">
            <span class=" font-bold text-xl">
                Titulo
            </span>
            <span class=" italic ">
                Descripcion
            </span>
        </div>
        <div class=" w-1/5 flex flex-row  items-center justify-center">
            <div class="flex w-1/2 border justify-center">
                a
            </div>
            <div class="flex w-1/2 border justify-center">
                b
            </div>
        </div>
    </div>
</template>

<script setup lang ="ts">
</script>
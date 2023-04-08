<script setup lang="ts">
import todocard from '../components/todocard.vue';
import dialogAdd from '../components/dialog.vue';
import boton from '../components/boton.vue';
import { onBeforeMount, ref } from 'vue';
import axios from 'axios'
import { useTodosStore } from '../stores/todos';
import { io } from 'socket.io-client'

const host = '192.168.1.3'

//Si se cambia la ip se debe modificar aqui


const dialog = ref(false)
const todos = useTodosStore()
const socket = io(`http://${host}:8081`)

onBeforeMount(async () => {
  const response = await axios.get(`http://${host}:8081/todo`)
  todos.setTodos(response.data)

  socket.on('newTodo', (body: any) => {
    console.log('socket', body)
    todos.addTodos(body)
  })

  socket.on('deleteTodo', (id: number) => {
    console.log('socket', id)
    todos.removeTodo(id)
  })

  socket.on('nextStage', (id: number) => {
    console.log('next', id)
    todos.nextStage(id)
  })

})

const save = (inputs: any) => {
  console.log(inputs.value)
  axios.post(`http://${host}:8081/todo`, inputs.value)
}

const deleter = (id: number) => {
  console.log(id)
  axios.post(`http://${host}:8081/todo/delete`, { id })
}

const next = (id: number) => {
  console.log(id)
  axios.post(`http://${host}:8081/todo/next`, { id })
}

</script>

<template>
  <div class="flex w-full flex-col relative">
    <div class="flex w-full flex-wrap p-5">
      <div class="w-1/2 font-bold text-4xl">
        ToDo List
      </div>
      <div class="w-1/2 flex justify-end">
        <boton title="Añadir tarea" color="primary" @click="dialog = true" />
      </div>
    </div>
    <div class="flex w-full flex-row flex-wrap ">
      <div class="w-1/3 p-4 flex flex-col justify-start">
        <span class="text-center font-bold text-xl italic">
          Pendientes
        </span>
        <div class="border flex-col w-full px-4 py-2">
          <todocard v-for="(task, index) in todos.pending" :key="index" :task="task" @delete="deleter(task.id)"
            @next="next(task.id)" />
          <span class="text-center italic" v-if="todos.pending.length == 0">
            No hay pendientes ...
          </span>
        </div>
      </div>
      <div class="w-1/3 p-4">
        <span class="text-center font-bold text-xl italic">
          En progreso
        </span>
        <div class="border flex-col w-full px-4 py-2 gap-2">
          <todocard v-for="(task, index) in todos.progress" :key="index" :task="task" @delete="deleter(task.id)"
            @next="next(task.id)"/>
          <span class="text-center italic" v-if="todos.progress.length == 0">
            No hay tareas en progreso ...
          </span>
        </div>
      </div>
      <div class="w-1/3 p-4">
        <span class="text-center font-bold text-xl italic">
          Realizadas
        </span>
        <div class="border flex-col w-full px-4 py-2 gap-2">
          <todocard v-for="(task, index) in todos.done" :key="index" :task="task" @delete="deleter(task.id)"
            @next="next(task.id)" last/>
          <span class="text-center italic" v-if="todos.done.length == 0">
            No hay tareas realizadas ...
          </span>
        </div>
      </div>
    </div>
    <dialogAdd v-if="dialog" @on-close="dialog = false" @to-save="save($event)" />
  </div>
</template>

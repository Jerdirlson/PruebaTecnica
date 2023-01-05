import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('counter', () => {
  
  const todos: Ref<Array<any>> = ref([ ])

  const pending = computed(() => {
    return todos.value.filter((todo : any) => {
      console.log('filter', todo)
      return todo.stage == 1
    })
  }) 

  const progress = computed(() => {
    return todos.value.filter((todo : any) => {
      return todo.stage == 2
    })
  })

  const done = computed(() => {
    return todos.value.filter((todo : any) => {
      return todo.stage == 3
    })
  })
  
  const setTodos = (values : any) => {
    todos.value = values
  }

  const addTodos = (value: any) => {
    todos.value.push(value)
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const nextStage = (id: number) => {
    todos.value = todos.value.map((todo) => {
      if(todo.id === id ){
        console.log(todo.stage)
        todo.stage = todo.stage + 1
      }
      return todo
    })
  }

  return { todos, setTodos, pending, progress, done, addTodos, removeTodo, nextStage }

})


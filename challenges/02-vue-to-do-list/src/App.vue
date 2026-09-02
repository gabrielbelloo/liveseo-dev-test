<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoFilters from './components/TodoFilters.vue'
import TodoItem from './components/TodoItem.vue'

interface Task {
  id: number
  title: string
  isCompleted: boolean
}

const tasks = ref<Task[]>([])

const addTask = (title: string) => {
  tasks.value.push({
    id: Date.now(),
    title: title,
    isCompleted: false
  })
}

const removeTask = (taskId: number) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId)
}

const filter = ref<'all' | 'pending' | 'completed'>('all')

const filteredTasks = computed(() => {
  if (filter.value === 'pending') {
    return tasks.value.filter(task => !task.isCompleted)
  }

  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.isCompleted)
  }

  return tasks.value
})

</script>

<template>
  <main>
    <h1>To-do List</h1>
    <TodoFilters @filter="filter = $event" />
    <TodoItem v-for="task in filteredTasks" :key="task.id" :task="task" @remove="removeTask" />
    <TodoForm @add="addTask" />
  </main>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main {
  width: 550px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

}
h1 {
  color: #1c1c1d;
  margin-bottom: 20px;
}
</style>
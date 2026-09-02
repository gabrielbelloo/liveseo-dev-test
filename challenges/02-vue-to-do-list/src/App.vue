<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
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

</script>

<template>
  <main>
    <TodoForm @add="addTask" />
  </main>
</template>

<style scoped></style>
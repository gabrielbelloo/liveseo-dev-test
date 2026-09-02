<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
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

</script>

<template>
  <main>
    <TodoItem v-for="task in filteredTasks" :key="task.id" :task="task" />
    <TodoForm @add="addTask" />
  </main>
</template>

<style scoped></style>
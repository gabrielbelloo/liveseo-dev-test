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

const removeTask = (taskId: number) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId)
}

</script>

<template>
  <main>
    <TodoItem v-for="task in filteredTasks" :key="task.id" :task="task" @remove="removeTask" />
    <TodoForm @add="addTask" />
  </main>
</template>

<style scoped></style>
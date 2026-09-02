<script setup lang="ts">
interface Task {
  id: number
  title: string
  isCompleted: boolean
}

const props = defineProps<{
    task: Task
}>()

</script>

<template>
    <div>
      <input type="checkbox" v-model="props.task.isCompleted">
      <p>{{ props.task.title }}</p>
    </div>
</template>

<style scoped>
</style>
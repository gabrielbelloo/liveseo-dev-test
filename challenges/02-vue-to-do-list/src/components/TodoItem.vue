<script setup lang="ts">
interface Task {
  id: number
  title: string
  isCompleted: boolean
}

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
    remove: [taskId: number]
}>()
</script>

<template>
    <div>
      <input type="checkbox" v-model="props.task.isCompleted">
      <p>{{ props.task.title }}</p>
      <button @click="emit('remove', props.task.id)">Remover</button>
    </div>
</template>

<style scoped>
</style>
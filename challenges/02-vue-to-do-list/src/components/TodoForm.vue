<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')

const emit = defineEmits<{
    add: [title:string]
}>()

const addTask = () => {
    if (!newTask.value.trim()) return

    emit('add', newTask.value.trim())

    newTask.value = ''
}
</script>

<template>
    <form @submit.prevent="addTask()">
        <input v-model="newTask" placeholder="Digite uma nova tarefa" required>
        <button type="submit">Adicionar</button>
    </form>
</template>

<style scoped></style>
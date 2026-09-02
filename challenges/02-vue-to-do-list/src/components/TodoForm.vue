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

<style scoped>
form{
    background-color: #fff;
    border-radius: 8px;
    max-width: 550px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button{
    padding: 10px;
    background-color: #1c1c1d;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3d3d3d;
}
</style>
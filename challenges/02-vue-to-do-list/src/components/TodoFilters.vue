<script setup lang="ts">
const emit = defineEmits<{
    filter: [filter: 'all' | 'pending' | 'completed']
}>()
</script>

<template>
    <div>
        <button @click="emit('filter', 'all')">Todas</button>
        <button @click="emit('filter', 'pending')">Pendentes</button>
        <button @click="emit('filter', 'completed')">Concluídas</button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    background-color: #1c1c1d;
    border-radius: 8px;
    margin-bottom: 20px;
}

button {
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
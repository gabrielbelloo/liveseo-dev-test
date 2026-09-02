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

<style scoped></style>
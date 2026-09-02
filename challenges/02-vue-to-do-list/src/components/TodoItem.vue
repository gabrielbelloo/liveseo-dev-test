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

defineOptions({ name: "TrashIcon" });

</script>

<template>
    <div>
        <input type="checkbox" v-model="props.task.isCompleted">
        <p>{{ props.task.title }}</p>
        <button @click="emit('remove', props.task.id)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z" />
                <path d="M9 10h2v8H9zM13 10h2v8h-2z" />
            </svg></button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

button {
    padding: 3px 6px;
    background-color: #ec0000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #d20303;
}
</style>
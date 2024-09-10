<template>
    <div class="grid w-full gap-2">
        <header class="flex items-start justify-between mb-6">
            <div class="grow">
                <h1>Transactions</h1>
                <p>All your transactions.</p>
            </div>
        </header>
        <DataTable :columns="columns" :data="data"/>
    </div>
</template>

<script setup lang="ts">
import DataTable from '~/components/DataTable.vue';
import {h, onMounted, ref} from 'vue';
import { columns } from './column';

const data = ref<any>([])

function generateRandomData(numObjects: number) {
    const statuses = ['pending', 'processing', 'completed']
    const emails = ['example@gmail.com', 'hello@example.com', 'abc@example.com', 'user@example.com']

    const randomData:any[] = [];
    for (let i = 0; i < numObjects; i++) {
        const id = Math.random().toString(36).substring(2,8)
        const amount = Math.floor(Math.random() * 500) + 50;
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        const email = emails[Math.floor(Math.random() * emails.length)]

        randomData.push({id, amount, status, email})
    }

    return data.value = randomData
}

onMounted(() => {
    generateRandomData(10)
})

</script>

<style scoped>

</style>
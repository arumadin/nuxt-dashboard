<script setup lang="ts">
import Card from '~/components/Card.vue';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const list = [
    {
        title: "Today",
    },
    {
        title: "Week",
    },
    {
        title: "Month",
    },
    {
        title: "Year",
    },
]

type dataProps = Ref<number[]>
let data: dataProps = ref([])

let currentCategory = ref('today')

const setCategory = (e: Event) => {
    const el = e.target as HTMLElement;
    const currentCat = el.innerText.toLowerCase()
    currentCategory.value = currentCat

    switch (currentCat) {
        case 'today':
            generateRandomData(24)
            break;
        case 'week':
            generateRandomData(7);
            break;
        case 'month':
            // const daysInMonth = categories.value['month'].length
            // generateRandomData(daysInMonth);
            generateRandomData(31)
            break;
        case 'year':
            generateRandomData(12);
            break;
        default:
            generateRandomData(24);
    }
}

function generateRandomData(number = 24) {
    let val = []
    for (let i = 0; i < number; i++) {
        val.push(Math.floor(Math.random() * 100))
    }
    data.value = val;
    return val;
}

const cards = [
    {
        title: "Sales",
        progression: 12,
        amount: 198.9,
        label: "View sales",
        description: "Sales of September 2024",
        icon: "solar:ticket-sale-outline"
    },
    {
        title: "Refund",
        progression: 8,
        amount: 84.44,
        label: "View refunds",
        description: "Refunds since beginning of year",
        icon: "heroicons-outline:receipt-refund"
    },
    {
        title: "Payouts",
        progression: 14,
        amount: 899.99,
        label: "View payouts",
        description: "Payouts of this week",
        icon: "tabler:zoom-money"
    }
]

onMounted(() => {
    generateRandomData();
})
</script>


<template>
    <div class="grid w-full gap-2">
        <header class="flex flex-col md:flex-row items-start justify-between mb-6">
            <div class="grow mb-4 md:m-0">
                <h1>Dashboard</h1>
                <p>All informations about your finances.</p>
            </div>
            <ProductNew />
        </header>
        <main>
            <Tabs default-value="Today" >
                <TabsList class="max-w-[400px]" @click="setCategory" >
                    <TabsTrigger v-for="item, index in list" :key="index" :value="item.title">
                        {{ item.title }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent class="w-[100%]" v-for="item, index in list" :key="index" :value="item.title">
                    <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <div class="grid gap-4 lg:grid-cols-3">
                <Card v-for="(item, index) in cards" :key="index" :card="item"></Card>
            </div>
        </footer>
    </div>
</template>


<style lang="scss" scoped></style>
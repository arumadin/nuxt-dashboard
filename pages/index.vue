<script setup lang="ts">
const list = [
    {
        title: "Today",
        component: resolveComponent("TabsToday")
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
let data:dataProps = ref([])

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
            generateRandomData(7);
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

onMounted(() => {
    generateRandomData();
})
</script>


<template>
    <div class="grid w-full gap-2">
        <header class="flex items-start justify-between mb-6">
            <div class="grow">
                <h1>Dashboard</h1>
                <p>All informations about your finances.</p>
            </div>
            <div class="w-[120px] bg-neutral-200 h-12"></div>
        </header>
        <main>
            <Tabs default-value="Today" @click="setCategory">
                <TabsList class="max-w-[400px]">
                    <TabsTrigger v-for="item, index in list" :key="index" :value="item.title">
                        {{ item.title }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent v-for="item, index in list" :key="index" :value="item.title">
                    <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
                    <!-- {{ item.title }} -->
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <div class="flex flex-wrap justify-between flex-wrap">
                <div class="w-[30%] h-[240px] bg-neutral-200"></div>
                <div class="w-[30%] h-[240px] bg-neutral-200"></div>
                <div class="w-[30%] h-[240px] bg-neutral-200"></div>
            </div>
        </footer>
    </div>
</template>


<style lang="scss" scoped></style>
<template>
    <div>
        <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
            <Logo />
            <p class="font-bold text-lg">Nuxt Dashboard</p>
        </header>
        <div class="px-4 grow">
            <div class="grid gap-2">
                <div v-for="(item, index) in items" :key="index"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
                    <Icon size="20" :name="item.icon" color="black"/>
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = ref ([
    {
        title: "Overview",
        path: "/overview",
        icon: "ri:apps-2-line"
    },
    {
        title: "Transaction",
        path: "/transaction",
        icon: "ri:arrow-left-right-fill"
    },
    {
        title: "Account",
        path: "/account",
        icon: "ri:account-circle-line"
    },
    {
        title: "Contacts",
        path: "/contacts",
        icon: "ri:contacts-book-2-line"
    },
    {
        title: "Settings",
        path: "settings",
        icon: "ri:settings-3-line"
    },
])
</script>

<style lang="scss" scoped>

</style>
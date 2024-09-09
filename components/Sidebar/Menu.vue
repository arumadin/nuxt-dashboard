<template>
    <div>
        <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
            <Logo />
            <p class="font-bold text-lg text-black">Nuxt Dashboard</p>
        </header>
        <div class="px-4 grow">
            <div class="grid gap-2">
                <NuxtLink :to="item.path" v-for="(item, index) in items" :key="index"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
                    <Icon size="20" :name="item.icon" color="black"/>
                    {{ item.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = ref ([
    {
        title: "Overview",
        path: "/",
        icon: "ri:apps-2-line"
    },
    {
        title: "Transactions",
        path: "/transactions",
        icon: "ri:arrow-left-right-fill"
    },
    {
        title: "Account",
        path: "/",
        icon: "ri:account-circle-line"
    },
    {
        title: "Contacts",
        path: "/",
        icon: "ri:contacts-book-2-line"
    },
    {
        title: "Settings",
        path: "",
        icon: "ri:settings-3-line"
    },
])
</script>

<style lang="scss" scoped>

</style>
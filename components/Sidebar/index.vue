<template>
    <div>
        <div class="z-50 flex lg:hidden items-center justify-between w-full h-full p-4">
            <!-- <SidebarMenu /> -->
            <Logo />
            <Icon size="30" class="z-50 cursor-pointer left-2 top-2 ml-2" name="mingcute:menu-line"
                @click="open = true" />
            <div v-if="open" class="fixed top-0 left-0 z-50 w-full h-full h-screen bg-white">
                <Icon size="30" class="absolute z-50 cursor-pointer right-4 top-4" name="ri:close-fill"
                @click="open = false" />
                <SidebarMenu />
            </div>
        </div>
        <div class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r">
            <SidebarMenu />
            <UserItem />
        </div>
    </div>
</template>

<script setup>
const open = ref(true)
</script>

<style lang="scss" scoped></style>
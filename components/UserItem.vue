<template>
    <div class="p-2 m-2 border rounded flex items-center gap-2 p-2 m-2 hover:bg-neutral-50 transition">
        <div class="w-10 h-10 bg-green-500 rounded-full font-bold text-white flex items-center justify-center">
            {{ name[0] }}
        </div>
        <div>
            <p class="font-bold text-black text-sm">{{ name }}</p>
            <p class="text-xs s">{{ designation }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const name = ref("John Doe")
const designation = ref("CTO")
</script>

<style scoped></style>
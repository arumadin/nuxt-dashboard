<template>
    <div>
        <Card class="self-stretch">
            <CardHeader class="flex flex-row justify-between items-center px-4 pt-4 pb-4">
                <p> {{ card.title }}</p>
                <Badge class="bg-green-400">{{ '+' + card.progression + '%'}}</Badge>
            </CardHeader>
            <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
                <div class="text-[48px] font-[800]">
                    <span class="text-neutral-300">$</span>
                    <span>{{ card.amount }}</span>
                </div>
            </CardContent>
            <CardFooter class="flex gap-2 py-2 px-2 items-center justify-between">
                <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <Icon size="20" :name="card.icon" color="black" />
                </div>
                <p class="grow text-xs">{{ card.description }}</p>
                <Button variant="outline">{{ card.label }}</Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card } from './ui/card';
const props = defineProps(["card"])

</script>

<style lang="scss" scoped>

</style>
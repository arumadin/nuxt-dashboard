<template>
    <AlertDialog :open="open">
        <AlertDialogTrigger @click="open = true">
            <Button>Add a new product</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Create New Product
                </AlertDialogTitle>
                <Input placeholder="My product name"/>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
                <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
const { loading, open } = useHelpers();
const createNewProduct = async () => {
    try {
        loading.value = true
        // business logic
    } catch (error) {

    } finally {
        loading.value = false
        open.value = false
    }
}
</script>

<style scoped></style>
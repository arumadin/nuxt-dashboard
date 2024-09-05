<template>
    <h1>Main page</h1>
    <div class="grid lg:flex items-start">
        <Sidebar />
        <div>
            <slot></slot>
        </div>
        
    </div>
</template>
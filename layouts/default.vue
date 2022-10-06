<template>
    <div class="relative">
        <div class="sticky top-0 left-0 right-0">
            <NavBar v-if="user" class="bg-base-100 text-base-content" />
        </div>
        <div class="overflow-hidden">
            <NuxtPage 
            class="bg-base-200 text-base-content min-h-screen block max-h-screen"
            :class="{'overflow-y-auto': user}" />
        </div>
    </div>
</template>

<script setup>
const user = useSupabaseUser()

useHead({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
    ],
    bodyAttrs: {
        class: 'overflow-hidden'
    }
})
</script>
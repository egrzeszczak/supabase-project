<script setup>
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/login')
        }
    })
})
</script>

<template>
    <main class="">
        <div class="bg-base-100 max-w-6xl mx-auto h-72 m-6 px-12 py-1">
            <Services />
        </div>        
    </main>
</template>
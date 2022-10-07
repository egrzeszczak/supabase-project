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
    <main>
        <div class="bg-base-100 text-base-content max-w-6xl mx-auto">
            <Services class="m-6 px-12 py-1"/>
        </div>        
    </main>
</template>
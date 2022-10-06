<script setup>
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/login')
        }
    })
})

const requests = ref([
    {
        id: 123,
        title: "Test request",
        created: Date.now(),
        status: 'New'
    },
    {
        id: 124,
        title: "Another Test request",
        created: Date.now(),
        status: 'Active'
    },
])
</script>

<template>
    <main>
        
    </main>
</template>
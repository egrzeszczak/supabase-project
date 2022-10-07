<script setup>
import { services } from '~/store/services';
// const route = useRoute()
// const currentServiceName = computed(() => {
//     return services.value.find((service) => {
//         return ('/services' + service.link == route.fullPath) 
//     })
// })
definePageMeta({
    layout: "service",
});
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
    <section>
        <BreadcrumbHeader :breadcrumbs="[
            {
                name: 'Services',
                link: '/services',
            },
        ]" />
    </section>
</template>
<script setup>
import { services } from '~/store/services';
// const route = useRoute()
// const currentServiceName = computed(() => {
//     return services.value.find((service) => {
//         return ('/services' + service.link == route.fullPath) 
//     })
// })
definePageMeta({
    middleware: ['auth'],
    layout: "service",
});
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
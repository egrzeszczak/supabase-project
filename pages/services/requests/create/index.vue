<script setup>
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
            {
                name: 'Requests',
                link: '/services/requests',
            },
            {
                name: 'Create request',
                link: '/services/requests/create',
            },
        ]" />
        <RequestCreateForm class="max-w-2xl"/>
    </section>
</template>
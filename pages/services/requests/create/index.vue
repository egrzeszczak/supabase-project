<script setup>
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
                {
                    name: 'Requests',
                    link: '/services/requests',
                },
                {
                    name: 'Create request',
                    link: '/services/requests/create',
                },
            ]" />
        </section>
    </template>
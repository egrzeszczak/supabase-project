<script setup>
const props = defineProps(['services'])
</script>
    
<template>
    <section id="services-list" class="grid grid-cols-12 gap-2">
        <nuxt-link v-for="service in services" :key="service.name" class="col-span-6 flex flex-row gap-2 items-center p-2 border border-transparent hover:border hover:shadow" :to="'/services' + service.link">
            <img v-if="service.icon && service.icon.type == 'local'" :src="service.icon.icon" :alt="service.icon.alt"
                class="w-4 h-4">
            <div class="text-xs">{{service.name}}</div>
        </nuxt-link>
    </section>
</template>
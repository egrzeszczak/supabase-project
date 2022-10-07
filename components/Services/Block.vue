<script setup>
const props = defineProps(['services'])
</script>

<template>
    <section id="services-block" class="flex gap-2 flex-wrap justify-center">
        <nuxt-link v-for="service in services" :key="service.name"
            class="hover:bg-inherit font-normal w-28 h-28 hover:border hover:shadow cursor-pointer overflow-hidden gap-1 flex flex-col justify-center items-center"
            :to="'/services' + service.link">
            <img v-if="service.icon && service.icon.type == 'local'" :src="service.icon.icon" :alt="service.icon.alt"
                class="w-12 h-12">
            <div class="text-center text-sm w-28 max-h-4 text-elipsis">{{service.name}}</div>
        </nuxt-link>
    </section>
</template>
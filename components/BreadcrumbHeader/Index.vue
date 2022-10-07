<script setup>
const props = defineProps(['breadcrumbs'])
</script>

<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li v-for="step, index in props.breadcrumbs" :key="step.name" >
                <nuxt-link v-if="index != props.breadcrumbs.length - 1" :to="step.link">{{step.name}}</nuxt-link>
            </li>
        </ul>
    </div>
    <h1 class="text-2xl">{{props.breadcrumbs[props.breadcrumbs.length-1].name}}</h1>
</template>
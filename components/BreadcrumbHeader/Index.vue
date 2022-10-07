<!-- 
Breadcrumb with H1 component

USE:    Example below

<BreadcrumbHeader 
    :breadcrumbs="
            [ 
                {   // INFO: First item will always be Home pointing to "/"
                    name: 'Services',
                    link: '/services',
                },
                {
                    name: 'Requests',
                    link: '/services/requests',
                },
                {   // INFO: Last item in 'breadcrumbs' array will be a h1 header displayed below the breadcrumbs (it will not be a breadcrumb)
                    name: 'Create request',
                    link: '/services/requests/create',
                },
            ]" 
        />

TODO:   Add recursive function to concat all paths from previous breadcrumb items
        Right now you have to insert it like: '/a', '/a/b', '/a/b/c' - but I want '/a', '/b', '/c' in the future

TODO:   Add icon support https://daisyui.com/components/breadcrumbs/
-->
<script setup>
const props = defineProps(['breadcrumbs'])
</script>

<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <li>
                <!-- INFO: First item will always be Home pointing to "/" -->
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li v-for="step, index in props.breadcrumbs" :key="step.name">
                <nuxt-link v-if="index != props.breadcrumbs.length - 1" :to="step.link">{{step.name}}</nuxt-link>
            </li>
        </ul>
        <!-- INFO: Last item in 'breadcrumbs' array will be a h1 header displayed below the breadcrumbs (it will not be a breadcrumb) -->
        <h1 class="text-2xl">{{props.breadcrumbs[props.breadcrumbs.length-1].name}}</h1>
    </div>
</template>
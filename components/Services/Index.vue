<script setup>
import { services } from '~/store/services.ts'
const view = ref('block')
</script>

<template>
    <section id="services" class="pb-10">
        <div class="flex flex-row items-center justify-between">
            <h1 class="text-lg my-2">Services</h1>
            <div class="btn-group">
                <button class="btn btn-ghost btn-xs" :class="{'btn-active': view == 'block'}" @click="view = 'block'"><svg
                        xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
                    </svg></button>
                <button class="btn btn-ghost btn-xs" :class="{'btn-active': view == 'list'}" @click="view = 'list'"><svg
                        xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                    </svg></button>
            </div>
        </div>
        <div class="">
            <div v-if="view == 'block'">
                <ServicesBlock :services="services" />
            </div>
            <div v-if="view == 'list'">
                <ServicesList :services="services" />
            </div>
        </div>
    </section>
</template>

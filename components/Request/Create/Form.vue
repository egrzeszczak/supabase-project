<script setup>
// TODO: Create an API call to create a request
</script>

<template>
    <section>
        <form action="" @submit.prevent="">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Title</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Description</span>
                </label>
                <textarea class="textarea textarea-bordered h-72 resize-none" placeholder="Type here"></textarea>
            </div>
            <div class="flex flex-row-reverse my-4">
                <input type="submit" class="btn btn-wide btn-sm" value="Create request">
            </div>
        </form>
    </section>
</template>
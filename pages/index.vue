<script setup>
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/login')
        }
    })
})

const requests = ref([
    {
        id: 1,
        title: "Create user",
        status: "New",
        created: new Date()
    }
])

const title = ref('')
const description = ref('')

</script>

<template>
    <main class="">
        <div class="bg-base-100 max-w-6xl mx-auto h-72 m-6 shadow px-12 py-6">

            <div class="">
                <h1 class="text-lg font-normal">Requests</h1>

                <div class="overflow-x-auto my-2">
                    <table class="table table-compact w-full">
                        <thead>
                            <th class="py-1 rounded-none bg-base-100 border-b m-0 w-1/6">#</th>
                            <th class="py-1 rounded-none bg-base-100 border-b m-0 w-1/2">Title</th>
                            <th class="py-1 rounded-none bg-base-100 border-b m-0 w-1/6">Status</th>
                            <th class="py-1 rounded-none bg-base-100 border-b m-0 w-1/6">Created</th>
                        </thead>
                        <tbody>
                            <tr v-for="request in requests" :key="request.id">
                                <th>{{request.id}}</th>
                                <td>{{request.title}}</td>
                                <td><div class="badge badge-secondary">{{request.status}}</div></td>
                                <td>{{ request.created.toLocaleString() }}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <label class="btn btn-sm btn-block justify-start btn-ghost" for="my-modal-5">New
                                        request</label>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>



        </div>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-lg">New request</h3>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" class="input input-bordered w-full" v-model="title" />
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-72" placeholder="Description" v-model="description"></textarea>
                </div>

                <div class="modal-action">
                    <label for="my-modal-5" class="btn btn-sm btn-ghost">Close</label>
                    <label for="my-modal-5" class="btn btn-sm btn-primary" @click="requests.push({id: (Date.now() % 9999), title: title, status: 'New', created: new Date()})">Send</label>
                </div>
            </div>
        </div>
    </main>
</template>
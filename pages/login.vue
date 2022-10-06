<script setup>
const email = ref('')
const password = ref('')
const loading = ref(false)
const magicLinkSent = ref(false)

const supabaseClient = useSupabaseClient()

const login = async () => {
    loading.value = true
    magicLinkSent.value = false
    const signInResult = await supabaseClient.auth.signIn({
        email: email.value,
        // password: password.value
    }).then(response => {
        loading.value = false
        magicLinkSent.value = true
        return response
    }).catch(error => {
        loading.value = false
        return error
    })

    console.log('signInResult', signInResult)
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/')
        }
    })
})
</script>
    
<template>
    <form @submit.prevent="login()">
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">supabase-project <i class="text-slate-600">login</i></h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at consequatur
                        officiis nam quasi dicta iste
                        eaque obcaecati esse soluta expedita vero voluptatem tempore inventore minus eveniet, placeat
                        quisquam
                        consequuntur!</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" v-model="email" />
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary" :class="{'loading': loading}" value="Login">Login</button>
                        </div>
                        <label v-if="magicLinkSent" class="label text-xs text-center text-primary-content">Magic link has been sent to {{email}}</label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script setup>
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient()
const logout = async () => {
    const { error } = supabaseClient.auth.signOut()
    console.log("error: ", error)
}
</script>

<template>
    <nav class="p-1 flex justify-between items-center gap-1">
        <div class="flex-1 flex items-center justify-start">
            <button class="btn btn-square btn-sm btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 448 512">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            <button class="btn btn-sm btn-ghost">supabase-project</button>
        </div>
        <div class="flex-1 flex items-center justify-center">
            <input type="text" placeholder="Search supabase-project..." class="input input-xs bg-base-300 text-base-content w-full" />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-sm btn-ghost font-normal text-xs flex gap-2">
                    {{user.email}}
                    <div class="avatar">
                        <div class="w-6 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                </label>
                <ul tabindex="0"
                    class="dropdown-content menu menu-compact p-2 shadow bg-base-100 text-base-content w-96">
                    <li class="menu-title">
                        <span>Account</span>
                    </li>
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
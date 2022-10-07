// Authenticated middleware for pages
export default defineNuxtRouteMiddleware(() => {
    // Get user from composables
    const user = useSupabaseUser()
    if (!user.value) {
        // If not authenticated - go to the login page
        return navigateTo({ path: '/login' })
    }
})
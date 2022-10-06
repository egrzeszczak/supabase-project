// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/google-fonts"],
    googleFonts: {
		families: {
			"Poppins": {
				wght: [300, 400, 600]
			}
		}
	}
})

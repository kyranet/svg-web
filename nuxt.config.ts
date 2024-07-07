// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/sitemap', '@nuxt/icon', '@nuxt/image'],
	image: { screens: {} },
	nitro: { prerender: { routes: ['/'] } },
	tailwindcss: { viewer: false },
	compatibilityDate: '2024-07-03'
});

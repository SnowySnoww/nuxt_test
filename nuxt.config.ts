// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'Nuxt Tailwind',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [{ name: 'description', content: 'This is my nuxt project' }],
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in',
		},
	},
});

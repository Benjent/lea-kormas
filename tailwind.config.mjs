/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				wood: {
					200: '#f4eee8',
					500: '#cf976c',
				}
			},
			fontFamily: {
				heading: ["Young Serif", "serif"],
				body: ["Noto Serif", "serif"],
			}
		},
	},
	plugins: [],
}
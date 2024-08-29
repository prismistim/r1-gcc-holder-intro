import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...colors,
      primary: '#f43f5e',
      'primary-content': '#262626',
		},
		extend: {
			fontFamily: {
				sans: ['"Rubik Variable"', '"M PLUS 2 Variable"', 'sans-serif']
			}
		},
	},
	plugins: [],
}

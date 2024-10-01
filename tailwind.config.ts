import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				turquoise: '#00FFDA',
				red: '#FF3333',
				blue: '#0000FF',
			},
			fontFamily: {
				brandon: ['"Brandon Grotesque"', 'sans-serif'],
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				bold: '700',
			},
		},
	},
	plugins: [],
}
export default config

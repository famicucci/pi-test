module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{react,js,ts,jsx,tsx}',
		'./components/**/*.{react,js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			cyan: { 500: '#06b6d4', 700: '#0e7490' },
			gray: { 200: '#e5e7eb', 300: '#d1d5db' },
			red: { 500: '#ef4444', 700: '#b91c1c' },
			white: '#ffffff',
		},
		extend: {},
	},
	plugins: [],
};

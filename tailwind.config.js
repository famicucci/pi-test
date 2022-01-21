module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{react,js,ts,jsx,tsx}',
		'./components/**/*.{react,js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			blue: { 500: '#3b82f6', 700: '#1d4ed8' },
			gray: { 200: '#e5e7eb' },
			slate: { 200: '#e2e8f0', 300: '#cbd5e1' },
			white: '#ffffff',
		},
		extend: {},
	},
	plugins: [],
};

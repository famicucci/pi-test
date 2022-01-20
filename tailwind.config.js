module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{react,js,ts,jsx,tsx}',
		'./components/**/*.{react,js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			blue: { 500: '#3b82f6', 700: '#1d4ed8' },
			gray: { 100: '#EFEFEF', 500: '#6b7280' },
			white: '#ffffff',
		},
		extend: {},
	},
	plugins: [],
};

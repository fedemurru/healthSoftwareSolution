/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0E7490", // Cyan color
				white: "#ffffff", // White
				secondary: "#0E7490", // A darker cyan shade for accents
				background: "#F8FAFC", // A light grayish background color
				third: "#FC4C54", // red
				dark: "#333333", // dark bg
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};

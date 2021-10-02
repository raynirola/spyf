module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{jsx,tsx}",
		"./components/**/*.{jsx,tsx}",
		"./layouts/**/*.{jsx,tsx}",
		"./utils/**/*.{jsx,tsx}",
	],
	darkMode: false,
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
	],
}

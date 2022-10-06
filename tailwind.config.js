module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				corporate: {
					...require('daisyui/src/colors/themes')[
					'[data-theme=black]'
					],
					'primary': '#075985',
					'secondary': '#7cc9e2',
					"--rounded-btn": "0.25rem",
					"--animation-btn": "0.25s",
				},
			},
		],
		darkTheme: 'black',
	},
}
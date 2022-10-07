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
				custom: {
					"primary": "#0caece",
					"secondary": "#f7ddad",
					"accent": "#435eb7",
					"neutral": "#1E2029",
					"base-100": "#EFEFEF", 
					"info": "#82C3E3",
					"success": "#37E1B4", 
					"warning": "#8E620B", 
					"error": "#E87A64",
					"--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0rem",
					"--animation-input": "1s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--animation-btn": "0.5s",
					"--rounded-badge": "0.25rem", // border radius rounded-badge utility class, used in badges and similar
					"--btn-text-case": "none", // set default text transform for buttons
					"--btn-focus-scale": "0.90", // scale transform of button when you focus on it
					// "--rounded-btn": "0.25rem",
					// "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					// "--animation-btn": "0.25s", // duration of animation when you click on button
					// "--border-btn": "1px", // border width of buttons
					// "--tab-border": "1px", // border width of tabs
					// "--tab-radius": "0.5rem", // border radius of tabs
				},
			},
		],
		darkTheme: 'custom',
	},
}
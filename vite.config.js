import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins : [ sveltekit() ],

	resolve : {
		alias : {
			components : path.resolve("./src/components"),
			utilities  : path.resolve("./src/utilities"),
			shared     : path.resolve("./src/shared"),
			assets     : path.resolve("./static/assets"),
		},
	},
};

export default config;

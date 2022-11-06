import adapter from '@sveltejs/adapter-netlify';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		files : {
			appTemplate : "./src/application.html"
		},

		alias : {
			components: path.resolve("./src/components"),
			utilities : path.resolve("./src/utilities"),
		}
	},
};

export default config;

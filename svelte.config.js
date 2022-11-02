import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		files : {
			appTemplate : "./src/application.html"
		}
	},
};

export default config;

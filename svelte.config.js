import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { windi } from "svelte-windicss-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		windi({
			silent: false,
			experimental: {
				icons: {
					prefix: 'i-',
					extraProperties: {
						display: 'inline-block',
					},
				},
			},
		})
	],

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;

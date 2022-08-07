<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import Card from '../lib/Card.svelte';
	let title = 'Finding customers for your new business';
	let content =
		'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-col max-w-screen gap-2">
	<h1 class="flex font-bold text-red-700 items-center justify-center">About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>

	<div class="flex">
		<div class="bg-white rounded-xl mx-auto space-y-2 shadow-md py-8 px-8 inline-flex">
			<div class="space-y-2 text-center">
				<div class="space-y-0.5">
					<p class="font-semibold text-lg text-black mb-2">Erin Lindford</p>
					<p class="font-medium pb-3 text-gray-500">Product Engineer</p>
				</div>
				<button
					class="border rounded-full font-semibold border-purple-200 text-sm 	py-1 px-4 ring-purple-600 ring-opacity-40 text-purple-600 hover:border-transparent
				hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2"
				>
					Message
				</button>
			</div>
		</div>
	</div>

	<div class="container flex flex-col justify-center">
		<Card {title} {content} />
	</div>
</div>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main class="flex flex-col mx-auto flex-1 max-w-[1024px]">
	<slot />
</main>

<footer class="flex mt-4 justify-center items-center">
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style windi:preflights:global windi:safelist:global>
</style>

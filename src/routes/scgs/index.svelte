<script>
	import { api } from './api/pokemon';
	// client-side rendered
	async function getPokemon() {
		const response = await api('GET', `api/v2/pokemon`);
		const data = response.body.results;
		console.log(333, response);
		console.log(666, data);
		return data;
	}
</script>

<svelte:head>
	<title>SCG</title>
	<meta name="description" content="SCG this app" />
</svelte:head>

<h1 class="flex justify-center items-center">Pokemon</h1>

{#await getPokemon()}
	<p>Loading...</p>
{:then pokemon}
	<ul>
		<li class="font-bold">list</li>
		{#each pokemon as pokemon}
			<li>{pokemon.name}</li>
		{/each}
	</ul>
{/await}

<style>
	li {
		text-transform: capitalize;
	}
</style>

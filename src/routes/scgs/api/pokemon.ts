// export async function GET() {
// 	const response = await fetch('https://pokeapi.co/api/v2/pokemon')
// 	const pokemon = await response.json()

// 	return {
// 		body: pokemon.results,
// 	}
// }


const base = 'https://pokeapi.co';

export async function api(method:string, resource: string) {
	const response = await fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		}
	});
	const pokemon = await response.json()

	return {
		body: pokemon,
	}
}

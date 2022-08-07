<script>
	export /**
	 * @type {any}
	 */
	let title;
	export /**
	 * @type {any}
	 */
	let content;
</script>

<div class="bg-white rounded-xl mx-auto max-w-md shadow-md overflow-hidden md:max-w-2xl">
	<div class="md:flex">
		<div class="md:flex-shrink-0">
			<img
				class="object-cover h-48 w-full md:w-48"
				src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
				alt="Man looking at item at a store"
			/>
		</div>
		<div class="p-8">
			<div class="font-semibold text-sm tracking-wide text-indigo-500 uppercase">Case study</div>
			<a href="/" class="font-medium mt-1 text-lg text-black leading-tight block hover:underline"
				>{title}</a
			>
			<p class="mt-2 text-gray-500">{content}</p>
		</div>
	</div>
</div>

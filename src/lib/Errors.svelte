<script lang="ts">
	import Head from './Head.svelte';

	export let msg;
	export let code;
	export let url;
</script>

<Head title={msg} />

<main>
	<section>
		<h1>{code}</h1>
		<p>{msg}</p>
		<p class="url">{url}</p>
	</section>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
	main {
		font-size: 21px;
		font-family: 'Teko', sans-serif;
		font-optical-sizing: auto;
		display: grid;
		place-items: center;
		margin-top: 3em;
	}
	section {
		max-width: 700px;
		border-radius: 5px;
		border: 2px solid grey;
		padding: 12px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	p.url {
		color: grey;
	}
</style>

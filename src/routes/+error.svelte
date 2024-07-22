<script>
	import { page } from '$app/stores';

	import PageNotFound from '$lib/PageNotFound.svelte';
</script>

<PageNotFound msg={$page.error?.message} code={$page.status} url={$page.url} />

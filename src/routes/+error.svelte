<script>
	import { page } from '$app/stores';
	import Errors from '$lib/Errors.svelte';
</script>

<Errors msg={$page.error?.message} code={$page.status} url={$page.url} />

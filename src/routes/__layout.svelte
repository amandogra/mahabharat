<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import '../variables.css';
</script>

{#if $page.url.pathname !== '/'}
	<Header />
{/if}
<main class:home={$page.url.pathname !== '/'}>
	<slot />
</main>

{#if $page.url.pathname !== '/'}
<footer>
	<p>
		&copy; {new Date().getFullYear()} All rights reserved with
		<a href="https://amandogra.com">Aman Dogra</a>
	</p>
</footer>
{/if}

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 2rem 1rem 1rem;
	}

	footer p {
		margin: 0;
		color: var(--nord3);
	}

	@media (min-width: 480px) {
		footer {
			padding: 2rem 1rem 1rem;
		}
	}
</style>

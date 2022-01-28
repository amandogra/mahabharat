<!-- src/routes/stories/index.svelte -->
<script context="module">
	export const load = async ({ fetch }) => {
		const stories = await fetch('/api/stories.json');
		const allStories = await stories.json();

		return {
			props: {
				stories: allStories
			}
		};
	};
</script>

<script>
	export let stories;
</script>

<ul>
	{#each stories as story}
		<li>
			<h2>
				<a href={story.path}>
					{story.meta.title}
				</a>
			</h2>
			Published {story.meta.date}
		</li>
	{/each}
</ul>

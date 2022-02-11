<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
		<a href="/">
			<span class="a11y">Om</span>
			<picture>
      <source srcset="om_red_light.svg" media="(prefers-color-scheme: dark)" />
      <img src="om_red_dark.svg" alt="Om" />
			</picture>
		</a>
	<div class="welcome">
		<div class="title-block">
			<h1 class="site-title animated fadeIn slow"><span>mysterious<br /></span>mahabharat</h1>
			<p class="site-subtitle animated slideInUp">
				Stories and trivia from one of the most ancient text.
			</p>
		</div>
		<div class="main-action-block">
			<a href="/stories" class="main-action">
				<span class="a11y">Start here</span>
				<span class="arrow" />
			</a>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		text-align: left;
	}

	.welcome {
		/* position: relative; */
		/* width: 100%; */
		/* height: 0; */
		/* padding: 0 0 calc(100% * 495 / 2048) 0; */
display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 2rem 0px; 
  grid-template-areas: 
    ". ."; 
	}

.main-action-block {
  position: relative;
}
.main-action {
  display: inline-block;
  position: relative;
  top: calc(50% - 0.5rem);
  left: calc(50% - 5rem);
}
.main-action:after {
  background-color: transparent;
  border: var(--border-size) solid var(--border-color);
  content: '';
  border-radius: 50%;
  display: block;
  height: 8rem;
  width: 8rem;
  position: absolute;
  top: -3rem;
  z-index: 1;
  animation-name: fade-in;
  animation-duration: 3s;
}
.arrow {
  position: absolute;
  left: 4.8rem;
  top: 0.9rem;
  z-index: 2;
  animation-name: arrow-appear;
  animation-duration: 2s;
}

.arrow::after,
.arrow::before {
  content: '';
  position: absolute;
  width: 2rem;
  height: 4px;
  right: -8px;
  background-color: var(--accent-color);
}

.arrow::after {
  top: -0.65rem;
  transform: rotate(45deg);
}

.arrow::before {
  top: 0.65rem;
  transform: rotate(-45deg);
}
</style>

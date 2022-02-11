<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.min.css" integrity="sha512-b42SanD3pNHoihKwgABd18JUZ2g9j423/frxIP5/gtYgfBz/0nDHGdY/3hi+3JwhSckM3JLklQ/T6tJmV7mZEw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<div class="container">
  <header>
    <a href="/" class="logo">
      <span class="a11y">Om</span>
      <picture>
      <source srcset="om_red_light.svg"
              media="(prefers-color-scheme: dark)">
      <img src="om_red_dark.svg" alt="" />
      </picture>
    </a>
  </header>
  <main>
  <div class="title-block">
    <h1 class="title animated fadeIn slow"><span>mysterious</span>mahabharat</h1>
    <p class="subtitle animated slideInUp">Stories and trivia from one of the most ancient text.</p>
  </div>
  <div class="main-action-block">
    <a href="/toc" class="main-action">
      <span class="a11y">Start here</span>
      <span class="arrow"></span>
    </a>
  </div>
  </main>
  <footer>
    <p class="credits">Curated by: <a href="https://amandogra.com">Aman Dogra</a></p>
  </footer>
</div>


<style>
body,
html {
  background-color: var(--bg-color);
  color: var(--text-color);
  display: block;
  font-family: var(--font-serif);
  font-size: 18px;
  height: 100%;
  margin: 0;
  padding: 0;
}

h1 {
  color: var(--heading-color);
  font-size: 4rem;
  font-weight: 700;
  line-height: 2;
  margin: 0;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

a {
  color: var(--accent-color);
  text-decoration: underline;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.corner {
  width: 3em;
  height: 3em;
}

.corner a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.corner img {
  width: 2em;
  height: 2em;
  object-fit: contain;
}

nav {
  display: flex;
  justify-content: center;
  /* --background: rgba(255, 255, 255, 0.7); */
}

header .logo img {
  width: 2em;
  height: 3em;
  display: block;
}

/* path { */
/* fill: var(--background); */
/* } */

nav ul {
  position: relative;
  padding: 0;
  margin: 0;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  /* background: var(--background); */
  /* background-size: contain; */
}

nav ul li {
  position: relative;
  height: 100%;
}

nav ul li.active::before {
  --size: 6px;
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: calc(50% - var(--size));
  border: var(--size) solid transparent;
  border-top: var(--size) solid var(--accent-color);
}

nav a {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 0.8rem;
  font-family: var(--font-sans-serif);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s linear;
}

a:hover {
  color: var(--accent-color);
}

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

.main-container {
  display: flex;
  flex-direction: row;
}

.sidebar {
  position: relative;
}
.main-content {
  position: relative;
}
.main-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc {
  position: relative
}
.story-list li {
  padding: 1rem 0;
}

.story-list li span {
  display: inline-block;
  color: var(--secondary-color);
}
.story-list li a {
  display: block;
  text-decoration: none;
  color: var(--text-color);
}
/* scrolling effects */
/* html([data-scroll='0']) header { */
  /* position: static; */
/* } */
/* html:not([data-scroll='0']) header { */
  /* position: fixed; */
  /* left: 0; */
  /* right: 0; */
/* } */
footer p {
  color: var(--secondary-color);
  margin: 0;
  padding: 1rem;
}

@media (min-width: 480px) {
}
</style>

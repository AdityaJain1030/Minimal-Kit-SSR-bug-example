<script lang="ts">
	import { onMount } from "svelte";
	export let showingNav: boolean
	import { browser } from '$app/env';
	let canvas: HTMLCanvasElement;
	let width: number;
	let height: number;
	let rendered = false
	let app

	onMount(async () => {
		// if(browser){
			const { Application } = await import('pixi.js')
			app = new Application({
				view: canvas,
				width,
				height
			})
			rendered = true
			
			app.renderer.backgroundColor = 0x061639;
		// }

	})
	
</script>

<nav class="bg-yellow-300 row-span-2 row-start-2 " on:click={e => {showingNav = !showingNav}} class:side_shown={showingNav} class:side_hidden={!showingNav}>
	<slot />
</nav>
{#if !showingNav}
	<div class="bg-white row-span-1 row-start-4 col-span-1 col-start-2 mx-5 my-4 z-10"> </div>
{/if}


<main class="bg-[#061639] row-span-2 row-start-3 " class:side_shown={showingNav} class:side_hidden={!showingNav} bind:clientHeight={height} bind:clientWidth={width}>
	<canvas bind:this={canvas} {width} {height}/>
</main>

<style>
	.side_hidden {
	  @apply col-span-3 col-start-2;
	}
	.side_shown {
	  @apply col-span-2 col-start-3;
	}
  </style>
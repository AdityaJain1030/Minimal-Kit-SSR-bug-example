<script lang="ts">
	import { onMount } from "svelte";
	export let showingNav: boolean
	import { browser } from '$app/env';
	// import type { Application } from 'pixi.js'
	let canvas: HTMLCanvasElement;
	let width: number;
	let height: number;
	let rendered = false
	// if (browser)
	let app

	onMount(async () => {
		if(browser){
			const { Application } = await import('pixi.js')
			app = new Application({
				view: canvas,
				width,
				height
			})
			rendered = true
			
			app.renderer.backgroundColor = 0x061639;
		}
		

		

		// if (canvas.getContext) {
               
        //        // use getContext to use the canvas for drawing
        //        var ctx = canvas.getContext('2d');

        //        // Draw shapes
        //        ctx.fillRect(25,25,100,100);
        //     //    ctx.clearRect(45,45,60,60);
        //     //    ctx.strokeRect(50,50,50,50);
        //     } else {
        //        alert('You need Safari or Firefox 1.5+ to see this demo.');
        //     }

	})
	// $: {
	// 	if (rendered) {
	// 		app.renderer.backgroundColor = 0x061639
	// 	}
	// }
	// $: resized = () => {
	// $:	console.log(width, height)
	// }
	// if(rendered)
	
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


	<!-- <h4>fjsafsdsfs</h4> -->

	<!-- </canvas> -->
<!-- </main> -->

<style>
	.side_hidden {
	  @apply col-span-3 col-start-2;
	}
	.side_shown {
	  @apply col-span-2 col-start-3;
	}
  </style>
<script>
  import Renderer from '$lib/renderer.svelte';
  let showingNav = false;
</script>

<div class="grid grid-cols-app grid-rows-app h-screen">
  <header class="bg-[#333333] col-span-full row-span-1"></header>


  {#if !showingNav}
    <aside class="row-span-2 col-span-1 col-start-4 row-start-3 bg-indigo-300 z-10 my-10 mr-8"></aside>
  {/if}

  <aside class="bg-red-200 row-span-3"></aside>
  
  <aside class="row-span-3 bg-purple-300 z-0"></aside>
  
  <Renderer bind:showingNav={showingNav}/>
</div>
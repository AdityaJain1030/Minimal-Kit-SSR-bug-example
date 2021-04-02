<script>
  import Renderer from '$lib/renderer.svelte';
  import Nav from '$lib/nav.svelte';
  import Toolbar from '$lib/toolbar.svelte'

  let showingNav = false;

  // $: console.log(showingNav)
  // const toggleShowingNav = () => {
    
  // }
</script>

<div class="grid grid-cols-app grid-rows-app h-screen">
  <header class="bg-[#333333] col-span-full row-span-1"></header>


  {#if !showingNav}
    <aside class="row-span-2 col-span-1 col-start-4 row-start-3 bg-indigo-300 z-10 my-10 mr-8"></aside>
  {/if}

  <aside class="bg-red-200 row-span-3"></aside>
  
  <aside class="row-span-3 bg-purple-300 z-0"></aside>
  
  <Renderer bind:showingNav={showingNav}/>


  <!-- <Nav />


  <nav class="bg-[#CECECE] row-span-1 col-span-3 col-start-2 row-start-2"></nav>

  <aside class="bg-white row-span-3 row-start-3 col-span-1 col-start-4"></aside> -->

  <!-- <header class="w-full h-10 bg-[#2c2c2c] flex col-span-full">
    <div class="flex z-20 flex-grow flex-1">
      {#each Array(2) as arr}
      <div class="w-10 h-10 bg-blue-500"></div>
      <div class="w-10 h-10 bg-blue-400"></div>
      {/each}
  
    </div>
    
    <h1 class="text-white flex-grow my-auto flex-1 text-center">This is the project bois / <b>yesitIs</b></h1>
    <div class="flex-grow flex-1">
      <button class="my-auto text-white ">POOOOOOOOOOOOOOOOOG</button>
    </div>
  
  
  </header>
  <Toolbar>
    <h1>Web Design is my passion</h1>
  </Toolbar>
  <Area/> -->
</div>
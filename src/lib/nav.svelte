<header class="bg-[#2c2c2c] flex col-span-full row-span-1">
	<!-- <slot/> -->
	<!-- < -->
	<div class="flex z-20 flex-grow flex-1">
		{#each Array(5) as arr}
		<button class="item_button"></button>
		{/each}

	</div>
	
	<h1 class="text-white flex-grow my-auto flex-1 text-center">This is the project bois / <b>yesitIs</b></h1>
	<div class="flex-grow flex-1">
		<button class="my-auto text-white">POOGG</button>
	</div>
</header>

<style>
	.item_button {
		@apply w-10 h-10 hover:bg-black focus:outline-none focus:bg-blue-500;
	}
</style>
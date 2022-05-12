<script lang='ts'>
	// Script imports
	import type { Grid } from '../grid'
	import type { Color } from '../../../color'


	// Component imports
	import Block from './Block.svelte'


	// Properties
	export let grid: Grid
	$: width = grid[0].length
	$: height = grid.length

	export let color: Color | null


	// Event handlers
	function onClick(x: number, y: number) {
		return function() {
			grid[y][x] = color
		}
	}
</script>

<div class='mt-[5vh] md:w-2/3 lg:w-1/4 m-auto'>
	<div class='grid gap-3 place-content-center place-items-center max-w-fit max-h-fit m-auto'

		 class:grid-cols-1={width === 1}
		 class:grid-cols-2={width === 2}
		 class:grid-cols-3={width === 3}
		 class:grid-cols-4={width === 4}
		 class:grid-cols-5={width === 5}
		 class:grid-cols-6={width === 6}
		 class:grid-cols-7={width === 7}
		 class:grid-cols-8={width === 8}
		 class:grid-cols-9={width === 9}

		 class:grid-rows-1={height === 1}
		 class:grid-rows-2={height === 2}
		 class:grid-rows-3={height === 3}
		 class:grid-rows-4={height === 4}
		 class:grid-rows-5={height === 5}
		 class:grid-rows-6={height === 6}
	>
		{#each grid as row, y}
			{#each row as cell, x}
				<Block {cell} {color} on:click={onClick(x, y)} />
			{/each}
		{/each}
	</div>
</div>
<script lang='ts'>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let width, height

	// noinspection JSUnusedAssignment
	const grid: Array<Array<boolean>> = Array(height).fill(null).map(() => Array(width).fill(false))


	function showGrid(w: number, h: number) {
		return function() {
			for (let iy = 0; iy <= h; iy++) {
				for (let ix = 0; ix <= w; ix++) {
					grid[iy][ix] = true
				}
			}
		}
	}

	function clearGrid() {
		for (let iy = 0; iy < grid.length; iy++) {
			for (let ix = 0; ix < grid[iy].length; ix++) {
				grid[iy][ix] = false
			}
		}
	}

	function select(w: number, h: number) {
		return function() {
			dispatch('pick', { width: w + 1, height: h + 1 })
		}
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>pick grid size</h1>
<div class='mt-[5vh] w-1/2 m-auto'>
	<div class='grid gap-3'

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

		 on:mouseout={clearGrid} on:blur={clearGrid}
	>
		{#each grid as row, y}
			{#each row as cell, x}
				<div
					class='border-2 rounded-md p-4 w-1 transition transition-colors hover:cursor-pointer hover:transition hover:transition-colors'

					class:bg-gray-200={cell}

					on:click={select(x, y)}
					on:mouseover={showGrid(x, y)} on:focus={showGrid(x, y)}
				></div>
			{/each}
		{/each}
	</div>
</div>

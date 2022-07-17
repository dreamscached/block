<!--suppress JSUnusedAssignment -->
<script lang='ts'>
	// Script imports
	import type { Grid } from '../grid'
	import type { Color } from '$lib/color'
	import { History } from '../history'

	// Component imports
	import Block from './Block.svelte'

	// Properties
	export let grid: Grid
	$: width = grid[0].length
	$: height = grid.length

	export let colors: Color[]
	export let color: Color | null
	export let history: History

	// Event handlers
	function onClick(x: number, y: number) {
		return function() {
			const [prev, curr] = [grid[y][x], color]
			history.do(() => {
				grid[y][x] = curr
			}, () => {
				grid[y][x] = prev
			})
		}
	}
</script>

<div class='grid gap-3 grid-cols-{width} grid-rows-{height} place-content-center place-items-center min-w-fit min-h-fit max-w-fit max-h-fit m-auto'>
	{#each grid as row, y}
		{#each row as cell, x}
			<Block {colors} {cell} {color} on:click={onClick(x, y)} />
		{/each}
	{/each}
</div>
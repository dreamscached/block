<script lang='ts'>
	// Script imports
	import { createEventDispatcher } from 'svelte'


	// Component imports
	import Block from './Block.svelte'


	// Properties
	export let width: number, height: number = null


	// Private variables
	let x: number | null = null, y: number | null = null


	// Event handling
	const dispatch = createEventDispatcher()

	function onMouseOver(cellX: number, cellY: number) {
		return function() {
			[x, y] = [cellX, cellY]
		}
	}

	function onMouseOut() {
		[x, y] = [null, null]
	}

	function onClick(cellX: number, cellY: number) {
		return function() {
			dispatch('pick', { w: cellX + 1, h: cellY + 1 })
		}
	}
</script>

<div class='mt-[5vh] w-1/4 m-auto'>
	<div class='grid grid-cols-8 grid-rows-6 gap-3 place-content-center place-items-center max-w-fit max-h-fit m-auto'
		 on:mouseout={onMouseOut} on:blur={onMouseOut}
	>
		{#each { length: height } as _, cellY}
			{#each { length: width } as _, cellX}
				<Block
					hovered={!(x === null && y === null) && (cellX <= x && cellY <= y)}
					on:mouseover={onMouseOver(cellX, cellY)} on:focus={onMouseOver(cellX, cellY)}
					on:mouseout={onMouseOut} on:blur={onMouseOut}
					on:click={onClick(cellX, cellY)}
				/>
			{/each}
		{/each}
	</div>
</div>
<!--suppress JSUnusedAssignment -->
<script lang='ts'>
	// Script imports
	import type { Color } from '$lib//color'
	import { createEventDispatcher } from 'svelte'


	// Component imports
	import ColorComponent from './Color.svelte'


	// Properties
	export let colors: Color[]
	export let color: Color = colors.find(color => color.name === 'white')


	// Event handling
	const dispatch = createEventDispatcher()

	function onClick(color: Color) {
		return function(e: MouseEvent) {
			dispatch('pick', { color, fill: e.shiftKey })
		}
	}
</script>

<div class='grid grid-cols-5 grid-rows-2 md:grid-cols-2 gap-2 place-content-center place-items-center w-fit min-h-fit'
	 class:md:grid-rows-4={colors.length === 9}
>
	{#each colors as paletteColor}
		<ColorComponent color={paletteColor} selected={color === paletteColor} on:click={onClick(paletteColor)} />
	{/each}
</div>
<script lang='ts'>
	// Script imports
	import type { Color } from '../../../color'
	import { createEventDispatcher } from 'svelte'


	// Component imports
	import ColorComponent from './Color.svelte'


	// Properties
	export let colors: (Color | null)[]
	export let color: Color | null = colors[0]


	// Event handling
	const dispatch = createEventDispatcher()

	function onClick(color: Color | null) {
		return function() {
			dispatch('pick', { color })
		}
	}
</script>

<div class='grid grid-cols-5 grid-rows-2 md:grid-cols-2 gap-2 place-content-center place-items-center w-fit min-h-fit'
	 class:md:grid-rows-4={colors.length === 9}
	 class:md:grid-rows-5={colors.length === 10}
>
	{#each colors as paletteColor}
		<ColorComponent color={paletteColor} selected={color === paletteColor} on:click={onClick(paletteColor)} />
	{/each}
	<ColorComponent color={null} selected={color === null} on:click={onClick(null)} />
</div>
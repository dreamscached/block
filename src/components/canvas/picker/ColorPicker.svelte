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

<div class='w-3/4 md:w-1/2 lg:w-1/3 m-auto mt-10'>
	<div class='grid gap-x-3 place-content-center place-items-center min-w-fit'
		 class:grid-cols-10={colors.length === 9}
		 class:grid-cols-11={colors.length === 10}
	>
		{#each colors as paletteColor}
			<ColorComponent color={paletteColor} selected={color === paletteColor} on:click={onClick(paletteColor)} />
		{/each}
		<ColorComponent color={null} selected={color === null} on:click={onClick(null)} />
	</div>
</div>
<script lang='ts'>
	// Script imports
	import { blocks, type Color } from '$lib/color'

	// Component imports
	import { slide } from 'svelte/transition'

	// Properties
	export let colors: Color[]
	export let color: Color
	export let selected: boolean
</script>

<div
	class='bg-{colors === blocks ? "block" : "heart"}-{color.name} border-{colors === blocks ? "block" : "heart"}-{color.name} border-2 rounded-md transition text-white w-8 h-8 flex flex-wrap place-content-center hover:cursor-pointer hover:-translate-y-1.5 hover:transition'
	on:click
>
	{#if selected}
		<svg xmlns='http://www.w3.org/2000/svg'
			 stroke='currentColor'
			 stroke-width='2'
			 class='w-5 h-5'
			 fill='none'
			 viewBox='0 0 24 24'
			 transition:slide={{duration: 300}}
		>
			<path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'
				  class:stroke-black={color.name === 'white'} />
		</svg>
	{/if}
</div>
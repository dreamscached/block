<script lang='ts'>
	// Script imports
	import type { Color } from '../../../color'


	// Component imports
	import { slide } from 'svelte/transition'


	// Properties
	export let color: Color | null
	export let selected: boolean
</script>

<div
	class='border-2 rounded-md transition text-white w-8 h-8 flex flex-wrap place-content-center hover:cursor-pointer hover:-translate-y-1.5 hover:transition'

	class:bg-block-green={color?.name === 'green'} class:border-block-green={color?.name === 'green'}
	class:bg-heart-green={color?.name === 'green'} class:border-heart-green={color?.name === 'green'}
	class:bg-block-brown={color?.name === 'brown'} class:border-block-brown={color?.name === 'brown'}
	class:bg-heart-brown={color?.name === 'brown'} class:border-heart-brown={color?.name === 'brown'}
	class:bg-block-blue={color?.name === 'blue'} class:border-block-blue={color?.name === 'blue'}
	class:bg-heart-blue={color?.name === 'blue'} class:border-heart-blue={color?.name === 'blue'}
	class:bg-block-red={color?.name === 'red'} class:border-block-red={color?.name === 'red'}
	class:bg-heart-red={color?.name === 'red'} class:border-heart-red={color?.name === 'red'}
	class:bg-block-purple={color?.name === 'purple'} class:border-block-purple={color?.name === 'purple'}
	class:bg-heart-purple={color?.name === 'purple'} class:border-heart-purple={color?.name === 'purple'}
	class:bg-block-orange={color?.name === 'orange'} class:border-block-orange={color?.name === 'orange'}
	class:bg-heart-orange={color?.name === 'orange'} class:border-heart-orange={color?.name === 'orange'}
	class:bg-block-yellow={color?.name === 'yellow'} class:border-block-yellow={color?.name === 'yellow'}
	class:bg-heart-yellow={color?.name === 'yellow'} class:border-heart-yellow={color?.name === 'yellow'}
	class:bg-block-black={color?.name === 'black'} class:border-block-black={color?.name === 'black'}
	class:bg-heart-black={color?.name === 'black'} class:border-heart-black={color?.name === 'black'}
	class:bg-block-white={color?.name === 'white'} class:border-block-white={color?.name === 'white'}
	class:bg-heart-white={color?.name === 'white'} class:border-heart-white={color?.name === 'white'}

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
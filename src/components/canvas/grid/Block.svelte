<script lang='ts'>
	// Script imports
	import type { Color } from '../../../color'


	// Properties
	export let cell: Color | null
	export let color: Color | null
</script>

<div
	class='border-2 border:gray-200 rounded-md hover:cursor-pointer transition transition-colors p-4 w-1'

	class:bg-heart-pink={cell?.name === 'pink'}
	class:border-heart-pink={cell?.name === 'pink'}
	class:hover:bg-heart-pink={color?.name === 'pink'}
	class:hover:border-heart-pink={color?.name === 'pink'}

	class:bg-block-green={cell?.name === 'green'}
	class:border-block-green={cell?.name === 'green'}
	class:hover:bg-block-green={color?.name === 'green'}
	class:hover:border-block-green={color?.name === 'green'}
	class:bg-heart-green={cell?.name === 'green'}
	class:border-heart-green={cell?.name === 'green'}
	class:hover:bg-heart-green={color?.name === 'green'}
	class:hover:border-heart-green={color?.name === 'green'}

	class:bg-block-brown={cell?.name === 'brown'}
	class:border-block-brown={cell?.name === 'brown'}
	class:hover:bg-block-brown={color?.name === 'brown'}
	class:hover:border-block-brown={color?.name === 'brown'}
	class:bg-heart-brown={cell?.name === 'brown'}
	class:border-heart-brown={cell?.name === 'brown'}
	class:hover:bg-heart-brown={color?.name === 'brown'}
	class:hover:border-heart-brown={color?.name === 'brown'}

	class:bg-block-blue={cell?.name === 'blue'}
	class:border-block-blue={cell?.name === 'blue'}
	class:hover:bg-block-blue={color?.name === 'blue'}
	class:hover:border-block-blue={color?.name === 'blue'}
	class:bg-heart-blue={cell?.name === 'blue'}
	class:border-heart-blue={cell?.name === 'blue'}
	class:hover:bg-heart-blue={color?.name === 'blue'}
	class:hover:border-heart-blue={color?.name === 'blue'}

	class:bg-block-red={cell?.name === 'red'}
	class:border-block-red={cell?.name === 'red'}
	class:hover:bg-block-red={color?.name === 'red'}
	class:hover:border-block-red={color?.name === 'red'}
	class:bg-heart-red={cell?.name === 'red'}
	class:border-heart-red={cell?.name === 'red'}
	class:hover:bg-heart-red={color?.name === 'red'}
	class:hover:border-heart-red={color?.name === 'red'}

	class:bg-block-purple={cell?.name === 'purple'}
	class:border-block-purple={cell?.name === 'purple'}
	class:hover:bg-block-purple={color?.name === 'purple'}
	class:hover:border-block-purple={color?.name === 'purple'}
	class:bg-heart-purple={cell?.name === 'purple'}
	class:border-heart-purple={cell?.name === 'purple'}
	class:hover:bg-heart-purple={color?.name === 'purple'}
	class:hover:border-heart-purple={color?.name === 'purple'}

	class:bg-block-orange={cell?.name === 'orange'}
	class:border-block-orange={cell?.name === 'orange'}
	class:hover:bg-block-orange={color?.name === 'orange'}
	class:hover:border-block-orange={color?.name === 'orange'}
	class:bg-heart-orange={cell?.name === 'orange'}
	class:border-heart-orange={cell?.name === 'orange'}
	class:hover:bg-heart-orange={color?.name === 'orange'}
	class:hover:border-heart-orange={color?.name === 'orange'}

	class:bg-block-yellow={cell?.name === 'yellow'}
	class:border-block-yellow={cell?.name === 'yellow'}
	class:hover:bg-block-yellow={color?.name === 'yellow'}
	class:hover:border-block-yellow={color?.name === 'yellow'}
	class:bg-heart-yellow={cell?.name === 'yellow'}
	class:border-heart-yellow={cell?.name === 'yellow'}
	class:hover:bg-heart-yellow={color?.name === 'yellow'}
	class:hover:border-heart-yellow={color?.name === 'yellow'}

	class:bg-block-black={cell?.name === 'black'}
	class:border-block-black={cell?.name === 'black'}
	class:hover:bg-block-black={color?.name === 'black'}
	class:hover:border-block-black={color?.name === 'black'}
	class:bg-heart-black={cell?.name === 'black'}
	class:border-heart-black={cell?.name === 'black'}
	class:hover:bg-heart-black={color?.name === 'black'}
	class:hover:border-heart-black={color?.name === 'black'}

	class:bg-block-white={cell?.name === 'white'}
	class:border-block-white={cell?.name === 'white'}
	class:hover:bg-block-white={color?.name === 'white'}
	class:hover:border-block-white={color?.name === 'white'}
	class:bg-heart-white={cell?.name === 'white'}
	class:border-heart-white={cell?.name === 'white'}
	class:hover:bg-heart-white={color?.name === 'white'}
	class:hover:border-heart-white={color?.name === 'white'}

	on:click
></div>
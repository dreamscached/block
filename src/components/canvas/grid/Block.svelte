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
	class:bg-hear-brown={cell?.name === 'brown'}
	class:border-hear-brown={cell?.name === 'brown'}
	class:hover:bg-hear-brown={color?.name === 'brown'}
	class:hover:border-hear-brown={color?.name === 'brown'}

	class:bg-block-blue={cell?.name === 'blue'}
	class:border-block-blue={cell?.name === 'blue'}
	class:hover:bg-block-blue={color?.name === 'blue'}
	class:hover:border-block-blue={color?.name === 'blue'}
	class:bg-hear-blue={cell?.name === 'blue'}
	class:border-hear-blue={cell?.name === 'blue'}
	class:hover:bg-hear-blue={color?.name === 'blue'}
	class:hover:border-hear-blue={color?.name === 'blue'}

	class:bg-block-red={cell?.name === 'red'}
	class:border-block-red={cell?.name === 'red'}
	class:hover:bg-block-red={color?.name === 'red'}
	class:hover:border-block-red={color?.name === 'red'}
	class:bg-hear-red={cell?.name === 'red'}
	class:border-hear-red={cell?.name === 'red'}
	class:hover:bg-hear-red={color?.name === 'red'}
	class:hover:border-hear-red={color?.name === 'red'}

	class:bg-block-purple={cell?.name === 'purple'}
	class:border-block-purple={cell?.name === 'purple'}
	class:hover:bg-block-purple={color?.name === 'purple'}
	class:hover:border-block-purple={color?.name === 'purple'}
	class:bg-hear-purple={cell?.name === 'purple'}
	class:border-hear-purple={cell?.name === 'purple'}
	class:hover:bg-hear-purple={color?.name === 'purple'}
	class:hover:border-hear-purple={color?.name === 'purple'}

	class:bg-block-orange={cell?.name === 'orange'}
	class:border-block-orange={cell?.name === 'orange'}
	class:hover:bg-block-orange={color?.name === 'orange'}
	class:hover:border-block-orange={color?.name === 'orange'}
	class:bg-hear-orange={cell?.name === 'orange'}
	class:border-hear-orange={cell?.name === 'orange'}
	class:hover:bg-hear-orange={color?.name === 'orange'}
	class:hover:border-hear-orange={color?.name === 'orange'}

	class:bg-block-yellow={cell?.name === 'yellow'}
	class:border-block-yellow={cell?.name === 'yellow'}
	class:hover:bg-block-yellow={color?.name === 'yellow'}
	class:hover:border-block-yellow={color?.name === 'yellow'}
	class:bg-hear-yellow={cell?.name === 'yellow'}
	class:border-hear-yellow={cell?.name === 'yellow'}
	class:hover:bg-hear-yellow={color?.name === 'yellow'}
	class:hover:border-hear-yellow={color?.name === 'yellow'}

	class:bg-block-black={cell?.name === 'black'}
	class:border-block-black={cell?.name === 'black'}
	class:hover:bg-block-black={color?.name === 'black'}
	class:hover:border-block-black={color?.name === 'black'}
	class:bg-hear-black={cell?.name === 'black'}
	class:border-hear-black={cell?.name === 'black'}
	class:hover:bg-hear-black={color?.name === 'black'}
	class:hover:border-hear-black={color?.name === 'black'}

	class:bg-block-white={cell?.name === 'white'}
	class:border-block-white={cell?.name === 'white'}
	class:hover:bg-block-white={color?.name === 'white'}
	class:hover:border-block-white={color?.name === 'white'}
	class:bg-hear-white={cell?.name === 'white'}
	class:border-hear-white={cell?.name === 'white'}
	class:hover:bg-hear-white={color?.name === 'white'}
	class:hover:border-hear-white={color?.name === 'white'}

	on:click
></div>
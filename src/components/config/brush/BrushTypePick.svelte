<script lang='ts'>
	// Component imports
	import Blocks from './option/Blocks.svelte'
	import Hearts from './option/Hearts.svelte'


	// Script imports
	import { createEventDispatcher } from 'svelte'
	import type { Color } from '../../../color'
	import { blocks, hearts } from '../../../color'


	// Event handling
	const dispatch = createEventDispatcher()

	function setType(type: Color[]) {
		return function() {
			dispatch('pick', { type })
		}
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>pick brush type</h1>
<div class='w-1/2 sm:w-2/3 md:w-1/3 lg:w-1/6 m-auto mt-24'>
	<div class='grid grid-cols-2 place-content-center place-items-center m-auto'>
		<Blocks on:click={setType(blocks)} />
		<Hearts on:click={setType(hearts)} />
	</div>
</div>

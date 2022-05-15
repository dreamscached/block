<script lang='ts'>
	// Component imports
	import Normal from './option/Normal.svelte'
	import Spoiler from './option/Spoiler.svelte'


	// Script imports
	import { createEventDispatcher } from 'svelte'


	// Event handling
	const dispatch = createEventDispatcher()

	function setType(bubbleWrap: boolean) {
		return function() {
			dispatch('pick', { bubbleWrap })
		}
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>pick mode</h1>
<div class='w-1/2 sm:w-2/3 md:w-1/3 lg:w-1/6 m-auto mt-24'>
	<div class='grid grid-cols-2 place-content-center place-items-center m-auto'>
		<Normal on:click={setType(false)} />
		<Spoiler on:click={setType(true)} />
	</div>
</div>

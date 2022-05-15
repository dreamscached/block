<script lang='ts'>
	// Component imports
	import Copy from './Copy.svelte'
	import Back from './Back.svelte'
	import Reset from './Reset.svelte'


	// Script imports
	import { createEventDispatcher } from 'svelte'


	// Event handling
	const dispatch = createEventDispatcher()

	function onCopy() {
		dispatch('copy')
	}

	function onBack() {
		dispatch('back')
	}

	function onReset() {
		dispatch('reset')
	}
</script>

<div class='flex flex-row gap-x-4 justify-center'>
	<Copy on:click={onCopy} />
	<Back on:click={onBack} />
	<Reset on:click={onReset} />
</div>
<script lang='ts'>
	// Script imports
	import { createEventDispatcher } from 'svelte'

	// Component imports
	import Page from '../../Page.svelte'
	import Normal from './option/Normal.svelte'
	import Spoiler from './option/Spoiler.svelte'

	// Event handling
	const dispatch = createEventDispatcher()

	function setType(bubbleWrap: boolean) {
		return function() {
			dispatch('pick', { bubbleWrap })
		}
	}
</script>

<Page>
	<span slot='title' class='dark:text-white transition'>pick mode</span>
	<div class='flex flex-row gap-8 place-content-center'>
		<Normal on:click={setType(false)} />
		<Spoiler on:click={setType(true)} />
	</div>
</Page>
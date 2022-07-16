<script lang='ts'>
	// Script imports
	import { createEventDispatcher } from 'svelte'
	import type { Color } from '$lib/color'
	import { blocks, hearts } from '$lib/color'

	// Component imports
	import Blocks from './option/Blocks.svelte'
	import Hearts from './option/Hearts.svelte'
	import Page from '../../Page.svelte'

	// Event handling
	const dispatch = createEventDispatcher()

	function setType(type: Color[], fill: Color) {
		return function() {
			dispatch('pick', { type, fill })
		}
	}
</script>

<Page>
	<span slot='title' class='dark:text-white transition'>pick brush type</span>
	<div class='flex flex-row gap-8 place-content-center'>
		<Blocks on:click={setType(blocks, blocks[8]/*=white*/)} />
		<Hearts on:click={setType(hearts, hearts[8]/*=white*/)} />
	</div>
</Page>
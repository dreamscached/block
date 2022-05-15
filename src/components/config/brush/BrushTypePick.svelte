<script lang='ts'>
	// Component imports
	import Blocks from './option/Blocks.svelte'
	import Hearts from './option/Hearts.svelte'
	import Page from '../../Page.svelte'


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

<Page>
	<span slot='title'>pick brush type</span>
	<div class='flex flex-row gap-8 place-content-center'>
		<Blocks on:click={setType(blocks)} />
		<Hearts on:click={setType(hearts)} />
	</div>
</Page>
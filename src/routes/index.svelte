<script lang='ts'>
	// Script imports
	import { size as canvasSize } from '../stores/canvas'
	import { baseUrl } from '$lib/url'
	import { goto } from '$app/navigation'
	import { bubbleWrap } from '../stores/bubblewrap'

	// Component imports
	import GridSizePick from '../components/config/grid/GridSizePick.svelte'

	// Event handling
	function setGridSize(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$canvasSize = { w: e.detail.w, h: e.detail.h }
		goto(`${baseUrl}/config/brush`, { replaceState: true })
	}

	// First config step, so reset variables
	$canvasSize = null
	$bubbleWrap = null
</script>

<GridSizePick width={8} height={6} on:pick={setGridSize} />
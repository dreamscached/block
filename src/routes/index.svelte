<script lang='ts'>
	// Component imports
	import GridSizePick from '../components/config/grid/GridSizePick.svelte'


	// Script imports
	import { size as canvasSize } from '../stores/canvas'
	import { baseUrl } from '../url'
	import { goto } from '$app/navigation'


	// Event handling
	function setGridSize(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$canvasSize = { w: e.detail.w, h: e.detail.h }
		goto(`${baseUrl}/config/brush`, { replaceState: true })
	}
</script>

<GridSizePick width={8} height={6} on:pick={setGridSize}/>
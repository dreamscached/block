<script lang='ts'>
	// Component imports
	import BrushTypePick from '../../components/config/brush/BrushTypePick.svelte'


	// Script imports
	import { brush as brush } from '../../stores/brush'
	import { baseUrl } from '../../url'
	import { goto } from '$app/navigation'


	// Event handling
	function setBrushType(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$brush = e.detail.type
		goto(`${baseUrl}/config/mode`, { replaceState: true })
	}
</script>

<BrushTypePick on:pick={setBrushType} />
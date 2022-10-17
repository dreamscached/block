<script lang='ts'>
	// Script imports
	import { brush, fill } from '../../../stores/brush'
	import { baseUrl } from '../../../lib/url'
	import { goto } from '$app/navigation'

	// Component imports
	import BrushTypePick from '../../../components/config/brush/BrushTypePick.svelte'

	// Event handling
	function setBrushType(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		[$brush, $fill] = [e.detail.type, e.detail.fill]
		goto(`${baseUrl}/config/mode`, { replaceState: true })
	}
</script>

<BrushTypePick on:pick={setBrushType} />
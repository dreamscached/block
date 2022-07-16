<script lang='ts'>
	// Component imports
	import ModePick from '../../components/config/mode/ModePick.svelte'


	// Script imports
	import { bubbleWrap } from '../../stores/bubblewrap'
	import { baseUrl } from '$lib/url'
	import { goto } from '$app/navigation'


	// Event handling
	function setMode(e: CustomEvent) {
		// noinspection TypeScriptUnresolvedVariable
		$bubbleWrap = e.detail.bubbleWrap
		goto(`${baseUrl}/canvas`, { replaceState: true })
	}
</script>

<ModePick on:pick={setMode} />
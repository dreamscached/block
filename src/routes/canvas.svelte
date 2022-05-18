<script>
	// Component imports
	import Canvas from '../components/canvas/Canvas.svelte'

	// Script imports
	import { size } from '../stores/canvas'
	import { brush } from '../stores/brush'
	import { bubbleWrap } from '../stores/bubblewrap'
</script>

<Canvas size={size} colors={brush} bubbleWrap={bubbleWrap} />
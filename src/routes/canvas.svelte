<script>
	// Script imports
	import { size } from '../stores/canvas'
	import { brush as colors, fill } from '../stores/brush'
	import { bubbleWrap } from '../stores/bubblewrap'

	// Component imports
	import Canvas from '../components/canvas/Canvas.svelte'
</script>

<Canvas size={size} colors={colors} fill={fill} bubbleWrap={bubbleWrap} />
<script>
	// Component imports
	import Canvas from '../components/canvas/Canvas.svelte'

	// Script imports
	import { size } from '../stores/canvas'
	import { brush as color, fill } from '../stores/brush'
	import { bubbleWrap } from '../stores/bubblewrap'
</script>

<Canvas size={size} colors={color} fill={fill} bubbleWrap={bubbleWrap} />
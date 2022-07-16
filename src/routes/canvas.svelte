<script>
	// Script imports
	import { size } from '../stores/canvas'
	import { brush as color, fill } from '../stores/brush'
	import { bubbleWrap } from '../stores/bubblewrap'

	// Component imports
	import Canvas from '../components/canvas/Canvas.svelte'
</script>

<Canvas size={size} colors={color} fill={fill} bubbleWrap={bubbleWrap} />
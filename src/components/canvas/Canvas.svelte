<!--suppress JSUnusedAssignment -->
<script lang='ts'>
	// Script imports
	import { createGrid, render } from './grid'
	import type { Color } from '../../color'
	import { size as canvasSize } from '../../stores/canvas'
	import { brush } from '../../stores/brush'
	import { bubbleWrap } from '../../stores/bubblewrap'


	// Component imports
	import Grid from './grid/Grid.svelte'
	import ColorPicker from './picker/ColorPicker.svelte'
	import Rack from './command/Rack.svelte'


	// Properties
	export let width: number, height: number
	export let colors: Color[]


	// Private variables
	let grid = createGrid(width, height)
	let color: Color | null = colors[0]


	// Event handling
	function onColorPick(e: CustomEvent) {
		color = e.detail.color
	}

	function onCopy() {
		navigator.clipboard.writeText(render(grid, { fillEmpty: undefined, unicode: true, bubbleWrap: $bubbleWrap }))
	}

	function onBack() {
		[$canvasSize, $brush, $bubbleWrap] = [null, null, null]
	}

	function onReset() {
		grid = createGrid(width, height)
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>now draw!</h1>
<Grid {grid} {color} />
<ColorPicker {colors} {color} on:pick={onColorPick} />
<Rack on:copy={onCopy} on:back={onBack} on:reset={onReset} />
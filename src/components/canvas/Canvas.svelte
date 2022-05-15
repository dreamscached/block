<!--suppress JSUnusedAssignment -->
<script lang='ts'>
	// Script imports
	import { createGrid, render } from './grid'
	import type { Color } from '../../color'
	import { size as canvasSize } from '../../stores/canvas'
	import { brush } from '../../stores/brush'
	import { bubbleWrap } from '../../stores/bubblewrap'


	// Component imports
	import Page from '../Page.svelte'
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
		navigator.clipboard.writeText(render(grid, { fillEmpty: ' ', unicode: true, bubbleWrap: $bubbleWrap }))
	}

	function onBack() {
		[$canvasSize, $brush, $bubbleWrap] = [null, null, null]
	}

	function onReset() {
		grid = createGrid(width, height)
	}
</script>

<Page>
	<span slot='title'>now draw!</span>
	<div class='flex flex-row flex-wrap gap-8 justify-center justify-items-center'>
		<table class='table hidden md:block'>
			<tr>
				<th>
					<div class='p-4'>
						<ColorPicker {colors} {color} on:pick={onColorPick} />
					</div>
				</th>
				<th>
					<div class='p-4'>
						<Grid {grid} {color} />
					</div>
				</th>
			</tr>
			<tr>
				<th></th>
				<th>
					<Rack on:copy={onCopy} on:back={onBack} on:reset={onReset} />
				</th>
			</tr>
		</table>
		<div class='flex flex-col gap-5 justify-center block md:hidden'>
			<Grid {grid} {color} />
			<div class='flex flex-row justify-center'>
				<ColorPicker {colors} {color} on:pick={onColorPick} />
			</div>
			<Rack on:copy={onCopy} on:back={onBack} on:reset={onReset} />
		</div>
	</div>
</Page>

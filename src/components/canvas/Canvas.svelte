<!--suppress JSUnusedAssignment -->
<script lang='ts'>
	// Script imports
	import { createGrid, type Dimensions, render } from './grid'
	import type { Color } from '../../color'
	import { History } from './history'
	import { goto } from '$app/navigation'
	import { baseUrl } from '../../url'


	// Component imports
	import Page from '../Page.svelte'
	import Grid from './grid/Grid.svelte'
	import ColorPicker from './picker/ColorPicker.svelte'
	import Rack from './command/Rack.svelte'


	// Properties
	export let size: Dimensions
	export let colors: Color[]
	export let fill: Color
	export let bubbleWrap: boolean


	// Private variables
	let grid = createGrid($size.w, $size.h, $fill)
	let history = new History(100)
	let color: Color | null = $colors[0]
	let initialFill = $fill


	// Event handling
	function onColorPick(e: CustomEvent) {
		if (e.detail.fill) {
			const [prev, curr] = [grid, createGrid($size.w, $size.h, e.detail.color)]

			history.do(() => {
				grid = curr
			}, () => {
				[grid, $fill] = [prev, initialFill]
			})
		} else {
			color = e.detail.color
		}
	}

	function onCopy() {
		navigator.clipboard.writeText(render(grid, {
			fillEmpty: $fill,
			unicode: true,
			bubbleWrap: $bubbleWrap
		}))
	}

	function onBack() {
		goto(`${baseUrl}/`, { replaceState: true })
	}

	function onReset() {
		const [prev, curr] = [grid, createGrid($size.w, $size.h, $fill)]
		history.do(() => {
			grid = curr
		}, () => {
			grid = prev
		})
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.ctrlKey && !e.shiftKey) {
			switch (e.code) {
				case 'KeyZ':
					history.undo()
					e.preventDefault()
					break
				case 'KeyY':
					history.redo()
					e.preventDefault()
					break
			}
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<Page>
	<span slot='title'>now draw!</span>
	<div class='flex flex-row flex-wrap gap-8 justify-center justify-items-center'>
		<table class='table hidden md:block'>
			<tr>
				<th>
					<div class='p-4'>
						<ColorPicker colors={$colors} {color} on:pick={onColorPick} />
					</div>
				</th>
				<th>
					<div class='p-4 min-w-fit'>
						<Grid {grid} {color} {history} />
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
			<Grid {grid} {color} {history} />
			<div class='flex flex-row justify-center'>
				<ColorPicker colors={$colors} {color} on:pick={onColorPick} />
			</div>
			<Rack on:copy={onCopy} on:back={onBack} on:reset={onReset} />
		</div>
	</div>
</Page>

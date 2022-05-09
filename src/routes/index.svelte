<script lang='ts'>
	// Script imports
	import { size as canvasSize } from '../stores/canvas'
	import { brush as brush } from '../stores/brush'


	// Component imports
	import GridSizePick from '../components/config/grid/GridSizePick.svelte'
	import BrushTypePick from '../components/config/brush/BrushTypePick.svelte'
	import { fly, slide } from 'svelte/transition'
	import Canvas from '../components/canvas/Canvas.svelte'


	// Event handling
	function setGridSize(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$canvasSize = { w: e.detail.w, h: e.detail.h }
	}

	function setBrushType(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$brush = e.detail.type
	}
</script>

<div class='mt-56 mb-10'>
	{#if !$canvasSize}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<GridSizePick width={8} height={6} on:pick={setGridSize} />
		</div>
	{:else if !$brush}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<BrushTypePick on:pick={setBrushType} />
		</div>
	{:else}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<Canvas width={$canvasSize.w} height={$canvasSize.h} colors={$brush} />
		</div>
	{/if}
</div>
<script lang='ts'>
	// Script imports
	import { size as canvasSize } from '../stores/canvas'
	import { brush as brush } from '../stores/brush'
	import { bubbleWrap } from '../stores/bubblewrap'


	// Component imports
	import GridSizePick from '../components/config/grid/GridSizePick.svelte'
	import BrushTypePick from '../components/config/brush/BrushTypePick.svelte'
	import Canvas from '../components/canvas/Canvas.svelte'
	import ModePick from '../components/config/mode/ModePick.svelte'
	import { fly, slide } from 'svelte/transition'


	// Event handling
	function setGridSize(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$canvasSize = { w: e.detail.w, h: e.detail.h }
	}

	function setBrushType(e: CustomEvent) {
		// noinspection JSUndeclaredVariable
		$brush = e.detail.type
	}

	function setMode(e: CustomEvent) {
		// noinspection TypeScriptUnresolvedVariable
		$bubbleWrap = e.detail.bubbleWrap
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
	{:else if !$bubbleWrap && $bubbleWrap !== false}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<ModePick on:pick={setMode} />
		</div>
	{:else}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<Canvas width={$canvasSize.w} height={$canvasSize.h} colors={$brush} />
		</div>
	{/if}
</div>
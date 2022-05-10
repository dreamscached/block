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

<div class='mt-64 mb-10'>
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

<div class='text-center text-gray-400 select-none fixed w-full bottom-20'>
	<span class='text-xl'>
		<a class='text-blue-400' href='https://github.com/dreamscached/block' target='_blank'>block</a>
		is made by
		<a class='text-blue-400' href='https://github.com/dreamscached' target='_blank'>@dreamscached</a>
		using
		<a class='text-orange-400' href='https://svelte.dev/' target='_blank'>svelte</a>
		and lots of
		<svg xmlns='http://www.w3.org/2000/svg' class='fill-red-400 h-5 w-5 mb-1 inline' viewBox='0 0 20 20' fill='currentColor'>
		  <path fill-rule='evenodd' clip-rule='evenodd'
				d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
		  />
		</svg>
	</span>
</div>
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

<svelte:head>
	<title>BLOCK 💚</title>
</svelte:head>

<div class='flex flex-col place-content-around w-screen h-screen'>
	{#if !$canvasSize}
		<GridSizePick width={8} height={6} on:pick={setGridSize} />
	{:else if !$brush}
		<BrushTypePick on:pick={setBrushType} />
	{:else if !$bubbleWrap && $bubbleWrap !== false}
		<ModePick on:pick={setMode} />
	{:else}
		<Canvas width={$canvasSize.w} height={$canvasSize.h} colors={$brush} />
	{/if}

	<div class='flex flex-row flex-wrap place-content-center basis-1/6'>
		<div class='text-gray-400 text-center basis-3/4 select-none'>
			<span class='text-md md:text-xl font-light'>
				<a class='text-green-400 font-normal' href='https://github.com/dreamscached/block'
				   target='_blank'>block</a>
				is made by
				<a class='text-blue-400 font-normal' href='https://github.com/dreamscached'
				   target='_blank'>@dreamscached</a>
				using
				<a class='text-orange-400 font-normal' href='https://svelte.dev/' target='_blank'>svelte</a>
				and lots of
				<svg xmlns='http://www.w3.org/2000/svg' class='fill-red-400 h-6 w-6 mb-1.5 inline' viewBox='0 0 20 20'
					 fill='currentColor'>
				  <path fill-rule='evenodd' clip-rule='evenodd'
						d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
				  />
				</svg>
			</span>
		</div>
	</div>
</div>
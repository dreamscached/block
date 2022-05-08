<script lang='ts'>
	import GridPicker from '../components/GridPicker.svelte'
	import GridDraw from '../components/GridDraw.svelte'
	import { fly, slide } from 'svelte/transition'

	let w, h

	function setGrid(x: number, y: number) {
		[w, h] = [x, y]
	}

	function resetGrid() {
		[w, h] = [null, null]
	}
</script>

<div class='w-[50vw] mt-[30vh] m-auto'>
	{#if !(w && h)}
		<div out:slide={{duration: 300}} in:fly={{delay: 300, duration: 300}}>
			<GridPicker
				width={8} height={6} on:pick={e => setGrid(e.detail.width, e.detail.height)}
			/>
		</div>
	{:else}
		<div in:fly={{delay: 300, duration: 300}} out:slide={{duration: 300}}>
			<GridDraw
				width={w} height={h} on:reset={resetGrid}
			/>
		</div>
	{/if}
</div>

<div class='text-center text-lg text-gray-500 fixed bottom-12 w-full'>
	made by
	<a class='text-blue-500 underline underline-offset-8' href='https://github.com/dreamscached'>@dreamscached</a>
	with
	<svg
		xmlns='http://www.w3.org/2000/svg'
		class='h-5 w-5 inline stroke-red-500 fill-red-500'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			fill-rule='evenodd'
			d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
			clip-rule='evenodd'
		/>
	</svg>
</div>
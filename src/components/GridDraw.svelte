<script lang='ts'>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	export let width, height

	// noinspection JSUnusedAssignment
	let grid: Array<Array<Color | null>> = Array(height).fill(null).map(() => Array(width).fill(null))
	type Cursor = { x: number, y: number, color: Color }
	let cursor: Cursor = null

	type Color = { emoji: string, name: string, code: string, r: number, g: number, b: number, hex: string }
	const colors: Array<Color | null> = [
		{ emoji: '🟩', name: 'green', code: 'green_square', r: 0x7c, g: 0xb3, b: 0x42, hex: '#7cb342' },
		{ emoji: '🟫', name: 'brown', code: 'brown_square', r: 0xb7, g: 0x6d, b: 0x54, hex: '#b76d54' },
		{ emoji: '🟦', name: 'blue', code: 'blue_square', r: 0x21, g: 0x96, b: 0xf3, hex: '#2196f3' },
		{ emoji: '🟥', name: 'red', code: 'red_square', r: 0xf4, g: 0x43, b: 0x36, hex: '#f44336' },
		{ emoji: '🟪', name: 'purple', code: 'purple_square', r: 0xab, g: 0x47, b: 0xbc, hex: '#ab47bc' },
		{ emoji: '🟧', name: 'orange', code: 'orange_square', r: 0xff, g: 0x98, b: 0x00, hex: '#ff9800' },
		{ emoji: '🟨', name: 'yellow', code: 'yellow_square', r: 0xff, g: 0xcc, b: 0x32, hex: '#ffcc32' },
		{ emoji: '⬛', name: 'black', code: 'black_large_square', r: 0x42, g: 0x42, b: 0x42, hex: '#424242' },
		{ emoji: '⬜', name: 'white', code: 'white_large_square', r: 0xe0, g: 0xe0, b: 0xe0, hex: '#e0e0e0' },
		null
	]
	let color: Color = colors[0]

	function moveCursor(x: number, y: number) {
		return function() {
			cursor = { x, y, color }
		}
	}

	function clearCursor() {
		cursor = null
	}

	function paint(x: number, y: number) {
		return function() {
			grid[y][x] = color
		}
	}

	function save() {
		const text: Array<string> = []

		for (const row of grid) {
			const line: Array<string> = []
			for (const cell of row) {
				if (cell !== null) {
					line.push(`||${cell.emoji}||`)
				} else {
					line.push('||　||')
				}
			}

			text.push(line.join(''))
		}

		navigator.clipboard.writeText(text.join('\n'))
	}

	function clear() {
		grid = Array(height).fill(null).map(() => Array(width).fill(null))
	}

	function reset() {
		dispatch('reset')
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase'>now draw!</h1>
<div class='mt-[5vh] w-1/2 m-auto'>
	<div
		class='
			grid
			gap-3
			justify-center justify-items-center
		'

		class:grid-cols-1={width === 1}
		class:grid-cols-2={width === 2}
		class:grid-cols-3={width === 3}
		class:grid-cols-4={width === 4}
		class:grid-cols-5={width === 5}
		class:grid-cols-6={width === 6}
		class:grid-cols-7={width === 7}
		class:grid-cols-8={width === 8}
		class:grid-cols-9={width === 9}

		class:grid-rows-1={height === 1}
		class:grid-rows-2={height === 2}
		class:grid-rows-3={height === 3}
		class:grid-rows-4={height === 4}
		class:grid-rows-5={height === 5}
		class:grid-rows-6={height === 6}

		on:mouseout={clearCursor} on:blur={clearCursor}
	>
		{#each grid as row, y}
			{#each row as cell, x}
				<div
					class='
						border-2 border:gray-200
						rounded-md
						hover:cursor-pointer
						transition transition-colors
						p-4 w-1
					'

					class:bg-block-green={cell?.name === 'green'}
					class:border-block-green={cell?.name === 'green'}
					class:hover:bg-block-green={cursor?.color?.name === 'green'}
					class:hover:border-block-green={cursor?.color?.name === 'green'}

					class:bg-block-brown={cell?.name === 'brown'}
					class:border-block-brown={cell?.name === 'brown'}
					class:hover:bg-block-brown={cursor?.color?.name === 'brown'}
					class:hover:border-block-brown={cursor?.color?.name === 'brown'}

					class:bg-block-blue={cell?.name === 'blue'}
					class:border-block-blue={cell?.name === 'blue'}
					class:hover:bg-block-blue={cursor?.color?.name === 'blue'}
					class:hover:border-block-blue={cursor?.color?.name === 'blue'}

					class:bg-block-red={cell?.name === 'red'}
					class:border-block-red={cell?.name === 'red'}
					class:hover:bg-block-red={cursor?.color?.name === 'red'}
					class:hover:border-block-red={cursor?.color?.name === 'red'}

					class:bg-block-purple={cell?.name === 'purple'}
					class:border-block-purple={cell?.name === 'purple'}
					class:hover:bg-block-purple={cursor?.color?.name === 'purple'}
					class:hover:border-block-purple={cursor?.color?.name === 'purple'}

					class:bg-block-orange={cell?.name === 'orange'}
					class:border-block-orange={cell?.name === 'orange'}
					class:hover:bg-block-orange={cursor?.color?.name === 'orange'}
					class:hover:border-block-orange={cursor?.color?.name === 'orange'}

					class:bg-block-yellow={cell?.name === 'yellow'}
					class:border-block-yellow={cell?.name === 'yellow'}
					class:hover:bg-block-yellow={cursor?.color?.name === 'yellow'}
					class:hover:border-block-yellow={cursor?.color?.name === 'yellow'}

					class:bg-block-black={cell?.name === 'black'}
					class:border-block-black={cell?.name === 'black'}
					class:hover:bg-block-black={cursor?.color?.name === 'black'}
					class:hover:border-block-black={cursor?.color?.name === 'black'}

					class:bg-block-white={cell?.name === 'white'}
					class:border-block-white={cell?.name === 'white'}
					class:hover:bg-block-white={cursor?.color?.name === 'white'}
					class:hover:border-block-white={cursor?.color?.name === 'white'}

					on:click={paint(x, y)}
					on:mouseover={moveCursor(x, y)} on:focus={moveCursor(x, y)}
				></div>
			{/each}
		{/each}
	</div>
</div>
<div class='w-2/3 m-auto'>
	<div
		class='grid mt-[5vh] gap-x-3'

		class:grid-cols-1={colors.length === 1}
		class:grid-cols-2={colors.length === 2}
		class:grid-cols-3={colors.length === 3}
		class:grid-cols-4={colors.length === 4}
		class:grid-cols-5={colors.length === 5}
		class:grid-cols-6={colors.length === 6}
		class:grid-cols-7={colors.length === 7}
		class:grid-cols-8={colors.length === 8}
		class:grid-cols-9={colors.length === 9}
		class:grid-cols-10={colors.length === 10}
	>
		{#each colors as paletteColor}
			<div
				class='
					border-2 rounded-md
					transition
					text-white
					w-8 h-8

					hover:cursor-pointer hover:-translate-y-1.5 hover:transition
				'

				class:bg-block-green={paletteColor?.name === 'green'}
				class:border-block-green={paletteColor?.name === 'green'}
				class:bg-block-brown={paletteColor?.name === 'brown'}
				class:border-block-brown={paletteColor?.name === 'brown'}
				class:bg-block-blue={paletteColor?.name === 'blue'}
				class:border-block-blue={paletteColor?.name === 'blue'}
				class:bg-block-red={paletteColor?.name === 'red'}
				class:border-block-red={paletteColor?.name === 'red'}
				class:bg-block-purple={paletteColor?.name === 'purple'}
				class:border-block-purple={paletteColor?.name === 'purple'}
				class:bg-block-orange={paletteColor?.name === 'orange'}
				class:border-block-orange={paletteColor?.name === 'orange'}
				class:bg-block-yellow={paletteColor?.name === 'yellow'}
				class:border-block-yellow={paletteColor?.name === 'yellow'}
				class:bg-block-black={paletteColor?.name === 'black'}
				class:border-block-black={paletteColor?.name === 'black'}
				class:bg-block-white={paletteColor?.name === 'white'}
				class:border-block-white={paletteColor?.name === 'white'}

				on:click={() => color = paletteColor}
			>
				{#if color?.name === paletteColor?.name}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						stroke='currentColor'
						stroke-width='2'
						class='w-5 h-5 m-1' fill='none' viewBox='0 0 24 24'
					>
						<path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'
							  class:stroke-black={color === null} />
					</svg>
				{/if}
			</div>
		{/each}
	</div>
</div>
<div class='mt-[5vh] w-2/3 m-auto'>
	<div class='grid grid-cols-3 place-items-center w-1/2 m-auto'>
		<div
			class='
				shadow-lg shadow-gray-100
				border-2 rounded-full
				p-3 w-14 h-14
				group
				transition transition-transform transition-colors

				hover:-translate-y-1.5
				hover:transition-colors hover:transition-transform
				hover:cursor-pointer
			'
			on:click={save}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				class='
					w-6 h-6 m-0.5
					stroke-gray-400
					transition transition-colors
					group-hover:stroke-gray-500
					hover:transition hover:transition-colors
				'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				stroke-width='2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
				/>
			</svg>
		</div>
		<div
			class='
				shadow-lg shadow-gray-100
				border-2 rounded-full
				p-3 w-14 h-14
				group
				transition transition-transform transition-colors

				hover:-translate-y-1.5
				hover:transition-colors hover:transition-transform
				hover:cursor-pointer
			'
			on:click={reset}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				class='
					w-6 h-6 m-0.5
					stroke-gray-400
					transition transition-colors
					group-hover:stroke-gray-500
					hover:transition hover:transition-colors
				'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				stroke-width='2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
				/>
			</svg>
		</div>
		<div
			class='
				shadow-lg shadow-gray-100
				border-2 rounded-full
				p-3 w-14 h-14
				group
				transition transition-transform transition-colors

				hover:-translate-y-1.5
				hover:transition-colors hover:transition-transform
				hover:cursor-pointer
			'
			on:click={clear}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				class='
				w-6 h-6 m-0.5
				stroke-red-400
				transition transition-colors
				group-hover:stroke-red-500
				hover:transition hover:transition-colors
			'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				stroke-width='2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
				/>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
				/>
			</svg>
		</div>
	</div>
</div>

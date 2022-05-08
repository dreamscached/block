<script lang='ts'>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let width, height

    // noinspection JSUnusedAssignment
    let grid: Array<Array<Color | null>> = Array(height).fill(null).map(() => Array(width).fill(null))
    type Cursor = { x: number, y: number, color: Color }
    let cursor: Cursor = null

    type Color = { emoji: string, name: string, code: string, r: number, g: number, b: number, hex: string }
    const colors: Array<Color | null> = [
        {emoji: '💖', name: 'pink', code: 'sparkling_heart', r: 0xed, g: 0x34, b: 0xa8, hex: '#ed34a8'},
        {emoji: '🖤', name: 'black', code: 'black_heart', r: 0x18, g: 0x18, b: 0x18, hex: '#181818'},
        {emoji: '🤍', name: 'white', code: 'white_heart', r: 0xdb, g: 0xdb, b: 0xdb, hex: '#dbdbdb'},
        {emoji: '💙', name: 'blue', code: 'blue_heart', r: 0x29, g: 0x83, b: 0xf8, hex: '#2983f8'},
        {emoji: '💚', name: 'green', code: 'green_heart', r: 0x44, g: 0xce, b: 0x28, hex: '#44ce28'},
        {emoji: '💜', name: 'purple', code: 'purple_heart', r: 0xbc, g: 0x4d, b: 0xf6, hex: '#bc4df6'},
        {emoji: '🤎', name: 'brown', code: 'brown_heart', r: 0x7e, g: 0x47, b: 0x1f, hex: '#7e471f'},
        {emoji: '🧡', name: 'orange', code: 'orange_heart', r: 0xff, g: 0x96, b: 0x0d, hex: '#ff960d'},
        {emoji: '❤️', name: 'red', code: 'red_heart', r: 0xec, g: 0x39, b: 0x2c, hex: '#ec392c'},
        {emoji: '💛', name: 'yellow', code: 'yellow_heart', r: 0xfc, g: 0xda, b: 0x4b, hex: '#fcda4b'},
        null
    ]
    let color: Color = colors[0]

    function moveCursor(x: number, y: number) {
        return function () {
            cursor = {x, y, color}
        }
    }

    function clearCursor() {
        cursor = null
    }

    function paint(x: number, y: number) {
        return function () {
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

                        class:bg-heart-green={cell?.name === 'green'}
                        class:border-heart-green={cell?.name === 'green'}
                        class:hover:bg-heart-green={cursor?.color?.name === 'green'}
                        class:hover:border-heart-green={cursor?.color?.name === 'green'}

                        class:bg-heart-brown={cell?.name === 'brown'}
                        class:border-heart-brown={cell?.name === 'brown'}
                        class:hover:bg-heart-brown={cursor?.color?.name === 'brown'}
                        class:hover:border-heart-brown={cursor?.color?.name === 'brown'}

                        class:bg-heart-blue={cell?.name === 'blue'}
                        class:border-heart-blue={cell?.name === 'blue'}
                        class:hover:bg-heart-blue={cursor?.color?.name === 'blue'}
                        class:hover:border-heart-blue={cursor?.color?.name === 'blue'}

                        class:bg-heart-red={cell?.name === 'red'}
                        class:border-heart-red={cell?.name === 'red'}
                        class:hover:bg-heart-red={cursor?.color?.name === 'red'}
                        class:hover:border-heart-red={cursor?.color?.name === 'red'}

                        class:bg-heart-purple={cell?.name === 'purple'}
                        class:border-heart-purple={cell?.name === 'purple'}
                        class:hover:bg-heart-purple={cursor?.color?.name === 'purple'}
                        class:hover:border-heart-purple={cursor?.color?.name === 'purple'}

                        class:bg-heart-orange={cell?.name === 'orange'}
                        class:border-heart-orange={cell?.name === 'orange'}
                        class:hover:bg-heart-orange={cursor?.color?.name === 'orange'}
                        class:hover:border-heart-orange={cursor?.color?.name === 'orange'}

                        class:bg-heart-yellow={cell?.name === 'yellow'}
                        class:border-heart-yellow={cell?.name === 'yellow'}
                        class:hover:bg-heart-yellow={cursor?.color?.name === 'yellow'}
                        class:hover:border-heart-yellow={cursor?.color?.name === 'yellow'}

                        class:bg-heart-black={cell?.name === 'black'}
                        class:border-heart-black={cell?.name === 'black'}
                        class:hover:bg-heart-black={cursor?.color?.name === 'black'}
                        class:hover:border-heart-black={cursor?.color?.name === 'black'}

                        class:bg-heart-white={cell?.name === 'white'}
                        class:border-heart-white={cell?.name === 'white'}
                        class:hover:bg-heart-white={cursor?.color?.name === 'white'}
                        class:hover:border-heart-white={cursor?.color?.name === 'white'}

                        class:bg-heart-pink={cell?.name === 'pink'}
                        class:border-heart-pink={cell?.name === 'pink'}
                        class:hover:bg-heart-pink={cursor?.color?.name === 'pink'}
                        class:hover:border-heart-pink={cursor?.color?.name === 'pink'}

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
            class:grid-cols-11={colors.length === 11}
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

                    class:bg-heart-green={paletteColor?.name === 'green'}
                    class:border-heart-green={paletteColor?.name === 'green'}
                    class:bg-heart-brown={paletteColor?.name === 'brown'}
                    class:border-heart-brown={paletteColor?.name === 'brown'}
                    class:bg-heart-blue={paletteColor?.name === 'blue'}
                    class:border-heart-blue={paletteColor?.name === 'blue'}
                    class:bg-heart-red={paletteColor?.name === 'red'}
                    class:border-heart-red={paletteColor?.name === 'red'}
                    class:bg-heart-purple={paletteColor?.name === 'purple'}
                    class:border-heart-purple={paletteColor?.name === 'purple'}
                    class:bg-heart-orange={paletteColor?.name === 'orange'}
                    class:border-heart-orange={paletteColor?.name === 'orange'}
                    class:bg-heart-yellow={paletteColor?.name === 'yellow'}
                    class:border-heart-yellow={paletteColor?.name === 'yellow'}
                    class:bg-heart-black={paletteColor?.name === 'black'}
                    class:border-heart-black={paletteColor?.name === 'black'}
                    class:bg-heart-white={paletteColor?.name === 'white'}
                    class:border-heart-white={paletteColor?.name === 'white'}
                    class:bg-heart-pink={paletteColor?.name === 'pink'}
                    class:border-heart-pink={paletteColor?.name === 'pink'}

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
                              class:stroke-black={color === null}/>
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

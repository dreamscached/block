<script lang='ts'>
	// Script imports
	import { size } from '../stores/canvas'
	import { bubbleWrap } from '../stores/bubblewrap'
	import { fly } from 'svelte/transition'
</script>

<div class='flex flex-col flex-wrap place-content-center'>
	<div class='text-gray-400 text-center select-none'>
		{#if $size && $bubbleWrap !== null}
			<p class='mb-4' in:fly={{ duration: 300 }}
			   out:fly={{ duration: 300 }}>
				Use
				<kbd class='bg-gray-200 rounded-md text-gray-600 font-medium p-1'>Ctrl+Z</kbd>
				and
				<kbd class='bg-gray-200 rounded-md text-gray-600 font-medium p-1'>Ctrl+Y</kbd>
				to undo and redo,
				<kbd class='bg-gray-200 rounded-md text-gray-600 font-medium p-1'>Shift+Click</kbd> on color to fill
				canvas.
			</p>
		{/if}
		<p class='text-md md:text-xl font-normal'>
			<a class='text-green-400 font-medium' href='https://github.com/dreamscached/block'
			   target='_blank'>block</a>
			is made by
			<a class='text-blue-400 font-medium' href='https://github.com/dreamscached'
			   target='_blank'>@dreamscached</a>
			using
			<a class='text-orange-400 font-medium' href='https://svelte.dev/' target='_blank'>svelte</a>
			and lots of
			<svg xmlns='http://www.w3.org/2000/svg' class='fill-red-400 h-6 w-6 mb-1.5 inline' viewBox='0 0 20 20'
				 fill='currentColor'>
				<path fill-rule='evenodd' clip-rule='evenodd'
					  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
				/>
			</svg>
		</p>
	</div>
</div>
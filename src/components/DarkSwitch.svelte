<script lang='ts'>
	// Script imports
	import { Mode } from '$lib/mode'
	import { type Writable } from 'svelte/store'

	export let mode: Writable<Mode>
</script>

{#if $mode === Mode.LIGHT}
	<svg xmlns='http://www.w3.org/2000/svg'
		 class='stroke-gray-700 fill-gray-700 hover:fill-transparent hover:cursor-pointer transition h-8 w-8'
		 viewBox='0 0 24 24'
		 stroke-width='2'
		 on:click={() => $mode = Mode.DARK}
	>
		<path stroke-linecap='round' stroke-linejoin='round'
			  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		/>
	</svg>
{:else}
	<svg xmlns='http://www.w3.org/2000/svg'
		 class='stroke-white fill-transparent hover:fill-white hover:cursor-pointer transition h-8 w-8'
		 viewBox='0 0 24 24'
		 stroke-width='2'
		 on:click={() => $mode = Mode.LIGHT}
	>
		<path stroke-linecap='round' stroke-linejoin='round'
			  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		/>
	</svg>
{/if}
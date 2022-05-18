<script lang='ts'>
	// Component imports
	import { fly } from 'svelte/transition'
</script>

<div class='flex flex-col flex-wrap gap-8 place-content-center basis-5/6'
	 in:fly={{ duration: 300 }}
	 out:fly={{ duration: 300 }} on:outrostart={e => e.target.style.display = 'none'}>
	<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>
		<slot name='title'><span></span></slot>
	</h1>
	<slot />
</div>
<script lang='ts'>
	// Component imports
	import Grid from './grid/Grid.svelte'


	// Properties
	export let width: number, height: number
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>pick grid size</h1>
<Grid {width} {height} on:pick />
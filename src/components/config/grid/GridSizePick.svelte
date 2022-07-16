<script lang='ts'>
	// Component imports
	import Page from '../../Page.svelte'
	import Grid from './grid/Grid.svelte'

	// Properties
	export let width: number, height: number
</script>

<Page>
	<span slot='title' class='dark:text-white transition'>pick grid size</span>
	<Grid {width} {height} on:pick />
</Page>

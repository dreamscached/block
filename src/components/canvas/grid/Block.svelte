<script lang='ts'>
	// Script imports
	import { blocks, type Color } from '$lib/color'

	// Properties
	export let colors: Color[]
	export let cell: Color | null
	export let color: Color | null
</script>

<div
	class='border-2 border:gray-200 bg-{colors === blocks ? "block" : "heart"}-{cell.name} border-{colors === blocks ? "block" : "heart"}-{cell.name} hover:bg-{colors === blocks ? "block" : "heart"}-{color.name} hover:border-{colors === blocks ? "block" : "heart"}-{color.name} rounded-md hover:cursor-pointer transition transition-colors p-3 md:p-4 w-1'
	on:click
></div>
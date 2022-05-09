<script lang='ts'>
	// Properties
	export let hovered: boolean
</script>

<div
	class='border-2 rounded-md p-4 w-1 transition transition-colors hover:cursor-pointer hover:transition hover:transition-colors'
	class:bg-gray-200={hovered}
	on:mouseover on:focus on:mouseout on:blur
	on:click
></div>
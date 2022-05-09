<script lang='ts'>
	// Script imports
	import { Type, Size } from '../../../option/options'


	// Component imports
	import Option from '../../../option/Option.svelte'
</script>

<Option type={Type.NORMAL} size={Size.BIG} on:click>
	<path stroke-linecap='round' stroke-linejoin='round'
		  d='m 6,20 h 12 c 1.104569,0 2,-0.895431 2,-2 V 6 C 20,4.8954305 19.104569,4 18,4 H 6 C 4.8954305,4 4,4.8954305 4,6 v 12 c 0,1.104569 0.8954305,2 2,2 z'>
	</path>
</Option>
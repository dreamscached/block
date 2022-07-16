<script lang='ts'>
	// Script imports
	import { Size, Type } from '../../../option/options'

	// Component imports
	import Option from '../../../option/Option.svelte'
</script>

<Option type={Type.NORMAL} size={Size.BIG} title='hearts' on:click>
	<path stroke-linecap='round' stroke-linejoin='round'
		  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'>
	</path>
</Option>
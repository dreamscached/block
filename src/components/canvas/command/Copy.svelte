<script lang='ts'>
	// Script imports
	import { Size, Type } from '../../option/options'

	// Component imports
	import Option from '../../option/Option.svelte'
</script>

<Option type={Type.NORMAL} size={Size.NORMAL} title='save' on:click>
	<path stroke-linecap='round'
		  stroke-linejoin='round'
		  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'>
	</path>
</Option>
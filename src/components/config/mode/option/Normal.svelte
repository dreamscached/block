<script lang='ts'>
	// Script imports
	import { Size, Type } from '../../../option/options'

	// Component imports
	import Option from '../../../option/Option.svelte'
</script>

<Option type={Type.NORMAL} size={Size.BIG} title='normal' on:click>
	<path stroke-linecap='round' stroke-linejoin='round'
		  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'>
	</path>
	<path stroke-linecap='round' stroke-linejoin='round'
		  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'>
	</path>
</Option>
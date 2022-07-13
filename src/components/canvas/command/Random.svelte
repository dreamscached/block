<script lang='ts'>
	// Script imports
	import { Size, Type } from '../../option/options'


	// Component imports
	import Option from '../../option/Option.svelte'
</script>

<Option type={Type.DANGER} size={Size.NORMAL} title='random' on:click>
	<path stroke-linecap='round' stroke-linejoin='round'
		  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'>
	</path>
</Option>
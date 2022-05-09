<script lang='ts'>
	// Script imports
	import { Type, Size } from './options'


	// Properties
	export let type: Type, size: Size
</script>

<div
	class='shadow-lg shadow-gray-100 border-2 rounded-full p-3 w-14 h-14 group transition transition-transform transition-colors
		hover:-translate-y-1.5 hover:transition-colors hover:transition-transform hover:cursor-pointer'
	class:w-14={size === Size.NORMAL} class:h-14={size === Size.NORMAL}
	class:w-20={size === Size.BIG} class:h-20={size === Size.BIG}
	on:click
>
	<svg xmlns='http://www.w3.org/2000/svg'
		 class='transition transition-colors group-hover:stroke-gray-500 hover:transition hover:transition-colors'
		 fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'

		 class:w-6={size === Size.BIG} class:h-6={size === Size.BIG} class:m-0.5={size === Size.BIG}
		 class:w-10={size === Size.BIG} class:h-10={size === Size.BIG} class:m-1.5={size === Size.BIG}

		 class:stroke-gray-400={type === Type.NORMAL}
		 class:group-hover:stroke-gray-500={type === Type.NORMAL}

		 class:stroke-red-400={type === Type.DANGER}
		 class:group-hover:stroke-red-500={type === Type.DANGER}
	>
		<slot />
	</svg>
</div>
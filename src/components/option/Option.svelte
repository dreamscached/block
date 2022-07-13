<script lang='ts'>
	// Script imports
	import { Size, Type } from './options'


	// Properties
	export let type: Type, size: Size
	export let title: string
</script>

<div class='flex flex-col flex-wrap place-content-center place-items-center'>
	<div
		class='shadow-lg dark:shadow-gray-700 bg-white border-2 rounded-full flex flex-wrap place-content-center p-3 w-14 h-14
		z-10 transition transition-all peer hover:-translate-y-1.5 hover:transition hover:transition-all
		hover:cursor-pointer'
		class:w-14={size === Size.NORMAL} class:h-14={size === Size.NORMAL}
		class:w-20={size === Size.BIG} class:h-20={size === Size.BIG}
		class:shadow-gray-100={type === Type.NORMAL}
		class:shadow-red-100={type === Type.DANGER}
		class:border-red-200={type === Type.DANGER}
		on:click
	>
		<svg xmlns='http://www.w3.org/2000/svg'
			 class='transition transition-colors block hover:transition hover:transition-colors'
			 fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'

			 class:w-6={size === Size.NORMAL} class:h-6={size === Size.NORMAL}
			 class:w-10={size === Size.BIG} class:h-10={size === Size.BIG}

			 class:stroke-gray-400={type === Type.NORMAL}
			 class:dark:stroke-gray-600={type === Type.NORMAL}
			 class:group-hover:stroke-gray-500={type === Type.NORMAL}

			 class:stroke-red-400={type === Type.DANGER}
			 class:dark:stroke-red-600={type === Type.DANGER}
			 class:group-hover:stroke-red-500={type === Type.DANGER}
		>
			<slot />
		</svg>
	</div>
	<p class='text-lg lowercase font-medium text-center select-none opacity-0 scale-x-50 scale-y-50 z-0 -mt-10 transition
		transition-all peer-hover:transition peer-hover:transition-all peer-hover:scale-x-100 peer-hover:scale-y-100
		peer-hover:translate-y-9 peer-hover:opacity-100'
	   class:text-gray-400={type === Type.NORMAL} class:group-hover:text-gray-500={type === Type.NORMAL}
	   class:dark:text-white={type === Type.NORMAL} class:group-hover:text-white={type === Type.NORMAL}
	   class:text-red-400={type === Type.DANGER} class:group-hover:text-red-500={type === Type.DANGER}
	>
		{title}
	</p>
</div>

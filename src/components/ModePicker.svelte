<script lang='ts'>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	function blocks() {
		dispatch('pick', { mode: 'blocks' })
	}

	function hearts() {
		dispatch('pick', { mode: 'hearts' })
	}
</script>

<h1 class='text-3xl text-gray-600 text-center uppercase select-none'>pick brush</h1>
<div class='mt-[5vh] w-1/2 m-auto'>
	<div class='mt-[10vh] w-1/2 m-auto'>
		<div class='grid grid-cols-2 place-items-center m-auto'>
			<div
				class='shadow-lg shadow-gray-100 border-2 rounded-full p-3 w-20 h-20 group transition transition-transform transition-colors hover:-translate-y-1.5 hover:transition-colors hover:transition-transform hover:cursor-pointer'
				on:click={blocks}
			>
				<svg xmlns='http://www.w3.org/2000/svg'
					 class='w-10 h-10 m-1.5 stroke-gray-400 transition transition-colors group-hover:stroke-gray-500 hover:transition hover:transition-colors'
					 fill='none'
					 viewBox='0 0 24 24'
					 stroke='currentColor'
					 stroke-width='2'
				>
					<path stroke-linecap='round'
						  stroke-linejoin='round'
						  d='m 6,20 h 12 c 1.104569,0 2,-0.895431 2,-2 V 6 C 20,4.8954305 19.104569,4 18,4 H 6 C 4.8954305,4 4,4.8954305 4,6 v 12 c 0,1.104569 0.8954305,2 2,2 z'
					/>
				</svg>
			</div>
			<div
				class='shadow-lg shadow-gray-100 border-2 rounded-full p-3 w-20 h-20 group transition transition-transform transition-colors hover:-translate-y-1.5 hover:transition-colors hover:transition-transform hover:cursor-pointer'
				on:click={hearts}
			>
				<svg xmlns='http://www.w3.org/2000/svg'
					 class='w-10 h-10 m-1.5 stroke-gray-400 transition transition-colors group-hover:stroke-gray-500 hover:transition hover:transition-colors'
					 fill='none'
					 viewBox='0 0 24 24'
					 stroke='currentColor'
					 stroke-width='2'
				>
					<path stroke-linecap='round'
						  stroke-linejoin='round'
						  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
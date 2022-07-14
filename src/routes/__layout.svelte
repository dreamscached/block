<script lang='ts' context='module'>
	// Script imports
	import { browser } from '$app/env'
	import { baseUrl } from '../url'

	export async function load({ url }) {
		return url.pathname !== `${baseUrl}/` && !browser ? { redirect: `${baseUrl}/`, status: 302 } : {}
	}
</script>

<script lang='ts'>
	// TailwindCSS import
	import '../app.css'


	// Component imports
	import Footer from '../components/Footer.svelte'

	// Script imports
	import { mode } from '../stores/dark'
	import { Mode } from '../mode'


	// Check now and listen for dark mode changes
	if (browser) {
		mode.subscribe(value => {
			if (value === Mode.DARK) {
				document.body.classList.add('dark')
			} else {
				document.body.classList.remove('dark')
			}
		})

		$mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Mode.DARK : Mode.LIGHT
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			$mode = e.matches ? Mode.DARK : Mode.LIGHT
		})
	}
</script>

<svelte:head>
	<title>BLOCK 💚</title>
	<meta property='og:title' content='BLOCK 💚' />
	<meta property='og:description' content='💚 Emoji grid generator with minimalistic UI' />
	<meta property='og:type' content='website' />
</svelte:head>

<div class='absolute right-0 top-0'>
	<div class='p-8'>
		{#if $mode === Mode.LIGHT}
			<svg xmlns='http://www.w3.org/2000/svg'
				 class='stroke-gray-700 fill-gray-700 hover:fill-transparent hover:cursor-pointer transition h-8 w-8'
				 viewBox='0 0 24 24'
				 stroke-width='2'
				 on:click={() => $mode = Mode.DARK}
			>
				<path stroke-linecap='round' stroke-linejoin='round'
					  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
				/>
			</svg>
		{:else}
			<svg xmlns='http://www.w3.org/2000/svg'
				 class='stroke-white fill-transparent hover:fill-white hover:cursor-pointer transition h-8 w-8'
				 viewBox='0 0 24 24'
				 stroke-width='2'
				 on:click={() => $mode = Mode.LIGHT}
			>
				<path stroke-linecap='round' stroke-linejoin='round'
					  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
				/>
			</svg>
		{/if}
	</div>
</div>

<div class='flex flex-col place-content-around w-screen h-screen dark:bg-gray-700 transition p-4'>
	<slot />
	<Footer />
</div>
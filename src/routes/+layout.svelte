<script lang='ts' context='module'>
	// Script imports
	import { browser } from '$app/environment'
	import { baseUrl } from '$lib/url'

	// Redirect to index page when non-index is requested.
	// (E.g. so that one can't just load /canvas; the application just isn't configured
	// until config routes are visited.)
	export async function load({ url }) {
		return url.pathname !== `${baseUrl}/` && !browser ? { redirect: `${baseUrl}/`, status: 302 } : {}
	}

	export const ssr = true;
</script>

<script lang='ts'>
	// TailwindCSS import
	import '../app.css'

	// Script imports
	import { mode } from '../stores/dark'
	import { Mode } from '$lib/mode'

	// Component imports
	import Footer from '../components/Footer.svelte'
	import DarkSwitch from '../components/DarkSwitch.svelte'

	// Check now and listen for dark mode changes
	if (browser) {
		mode.subscribe(value => {
			if (value === Mode.DARK) {
				document.body.classList.add('dark')
			} else {
				document.body.classList.remove('dark')
			}
		})

		if ($mode === null) {
			$mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Mode.DARK : Mode.LIGHT
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
				$mode = e.matches ? Mode.DARK : Mode.LIGHT
			})
		}
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
		<DarkSwitch {mode} />
	</div>
</div>

<div class='flex flex-col place-content-around w-screen h-screen dark:bg-gray-800 transition p-4'>
	<slot />
	<Footer />
</div>
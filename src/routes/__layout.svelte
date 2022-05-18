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
</script>

<svelte:head>
	<title>BLOCK 💚</title>
</svelte:head>

<div class='flex flex-col place-content-around w-screen h-screen'>
	<slot />
	<Footer />
</div>
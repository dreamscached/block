<script lang='ts' context='module'>
	// Script imports
	import { browser } from '$app/env'
	import { baseUrl } from '$lib/url'

	// Redirect to index page when non-index is requested.
	// (E.g. so that one can't just load /canvas; the application just isn't configured
	// until config routes are visited.)
	export async function load({ url }) {
		return url.pathname !== `${baseUrl}/` && !browser ? { redirect: `${baseUrl}/`, status: 302 } : {}
	}
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

	// TOTALLY_NOT_A_SECRET_FOR_SOMEONE_SPECIAL (don't even try to find it with s*arch)
	if (browser) {
		const d = new Date()
		if (d['get' + 'Mon' + 'th']() === 7 && d['get' + 'Date']() === 4) {
			window['he' + 'lp'] = () => `(Press ENTER) You have found help! Type (without quotes) 'whatsnew' to see changelog; 'hint' for listing browser hardware optimization hints used in this browser's build.`
			window['whats' + 'new'] = `New in version 2022.08.04-r377f6ab1: introducing 'cake' command only available on current release date. Hardware hints enabled.`
			window['hin' + 't'] = `Build 2022.08.04-r377f6ab1: COMMAND_gibgift DISCORD_HINTS_ALLOW`
			window['ca' + 'ke'] = `Happy birthday, user! Not like this console has much to offer, though... To claim your gift, try asking this console nicely~ S̨̛̭̯͕̫̜͎ͣͤI̸̦̺̹ͫͨ̉G̶̪̭̼͚͊̒͋͊̂ḛ̴͙͍ͯ̍e̗̤̩̰̞̼ͤͣ̋ͩ̍ͥ̒͞e̦̼̥̯̖̖͓̹͉ͫ͐ͯ͞3̶̗̦̠̭̠̥̦̉ͮ͌͜7̵̠͉̫̯̘̥̮̃͘͜7̿̎̓̕҉̣̜̫̲̼̯͔̭͞V̧̻̝́͂͟ͅ ͓̰̤͓͑͂̍ͭ͆̊̏ͮ́͡M̷̭̳̙̜̗̤͚̜̓̽̓̐̈͂͗ͯ͝ͅ3̢͓̩̬̟̽̓ͮ̓̉M̶͓͖ͬ̃͐͐̒̐ǫ͑ͣ̎ͪ̓̾͗҉̖̰̺̬̝͔o̷̺̹̘̞̐͂͋ͤ́ͩ̈́ͮͅọ͙̘̫͕̼̥̮͛̾o̡̘̦̜̺̠̜̥͑̑ͫͯ̂̌͘o̷̝̦̖̐ö̡͉̳ ̫̻̭̙̖͙͉̣̾̓̑̆̊ͬͥ̏̄̀̕͠V̷̫̹̮̜̲ͥ̎́I̴͇͎ͫ̇̉̒̎̃͋͗͠ //FIXME HOW COULD ONE MAKE THIS COMMAND SO PERFORMANCE-DEMANDING SO IT NEEDS A HARDWARE HINT, YOU GUYS REALIZE THIS HARMS OUR UX SO MUCH I MYSELF ONLY FOUND IT AFTER CHECKING 'hint'??? AND WHY CAN'T WE JUST TYPE IT BUT NEED TO ADD A () AFTER IT??? GOD DAMMIT Eͫ̈ͪ͐͘͏̠̺̘̜̮Ē̶͋̈ͧ̾͏̼̭̠͍E̼̙ͪ̋̃̌̉ͭḚ̵̈ͬͩ͌͑̈́̅̑È̽͐ͫ́͏̛̗ ̭͐ͮ͂͊͒̈́̾ͨ͟U̝̥͕͎̗͔̟͐̏̆̽Ņ̨͈̜̪̝͎̓͒ͫẢ̸̻̪͉̯̱͈̇̀ͣ́͐͌L̞̬͒́ͫ̈́ͥ̍́͘͝L̷̙̬͇̺̩͕̣̭̆ͥ͒̐̃͡Ĺͣ͞҉̣̯̻O̸̧̹̣̣͎̳͒̂ͧ̒̾̀C͇͓̰͉̼ͧ̀C͖͈̳̙̗̙̾̓̓̔̏ͥͩͅͅÇ̛̞̻̦̜̅̓̅͟C̴̡̲̳͉̯̫̗̺͎͂͘C̴̸̱̦͔̥̣̙̞̻ͮͪ̃ͬ̋̓ͭ͞C̫̬̜͙͎̮͊̔ͮ̌ͣͬͭ̽̚̕`
			window['gibgift'] = () => {
				console.log('%c<3 🎂 <3', 'font-size: 150px')
				console.log('%c      https://mon.icu/surprise', 'font-size: 30px')
			}
		} else {
			window['he' + 'lp'] = () => `(Press ENTER) You have found help! But there isn't anything available at the moment. Check back later!`
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

<div class='flex flex-col place-content-around w-screen h-screen dark:bg-gray-700 transition p-4'>
	<slot />
	<Footer />
</div>
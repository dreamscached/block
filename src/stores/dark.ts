import { type Writable, writable } from 'svelte/store'
import { Mode } from '$lib/mode'
import { browser } from '$app/env'

const localStorageKey = 'darkMode'
const storedMode = browser ? localStorage.getItem(localStorageKey) : null

export const mode: Writable<Mode | null> = writable(
	storedMode !== null ? (JSON.parse(storedMode) ? Mode.DARK : Mode.LIGHT) : null
)

if (browser) {
	mode.subscribe((value) => {
		localStorage.setItem(localStorageKey, JSON.stringify(value === Mode.DARK))
	})
}

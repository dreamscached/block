import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

export const bubbleWrap: Writable<boolean | null> = writable()
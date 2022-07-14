import { type Writable, writable } from 'svelte/store'
import type { Mode } from '../mode'

export const mode: Writable<Mode> = writable()

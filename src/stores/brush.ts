import { type Writable, writable } from 'svelte/store'
import type { Color } from '../color'

export const brush: Writable<Color[] | null> = writable()
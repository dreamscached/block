import { type Writable, writable } from 'svelte/store'
import type { Color } from '../color'

export const brush: Writable<Color[] | null> = writable()
export const fill: Writable<Color | null> = writable()
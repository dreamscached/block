import { type Writable, writable } from 'svelte/store'
import type { Dimensions } from '../components/canvas/grid'

export const size: Writable<Dimensions | null> = writable()

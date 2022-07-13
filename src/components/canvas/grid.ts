import type { Color } from '../../color'

export type Dimensions = { w: number; h: number }

export type Grid = Color[][]

export function createGrid(width: number, height: number, fill: Color): Grid {
	if (width < 1 || height < 1) throw 'width or height cannot be less than one'
	return Array(height)
		.fill(null)
		.map(() => Array(width).fill(fill))
}

export type RenderOptions = {
	bubbleWrap: boolean
	unicode: boolean
	fillEmpty: Color | undefined
}

export function render(
	grid: Grid,
	options: RenderOptions = {
		bubbleWrap: false,
		unicode: true,
		fillEmpty: undefined
	}
): string {
	const lines: string[] = []

	for (const row of grid) {
		const line: string[] = []

		for (const cell of row) {
			const value =
				(cell ?? {})[options.unicode ? 'emoji' : 'code'] ?? (options?.fillEmpty?.code)
			line.push(options.bubbleWrap ? `||${value}||` : value)
		}

		lines.push(line.join(''))
	}

	return lines.join('\n')
}

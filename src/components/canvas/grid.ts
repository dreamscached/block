import type { Color } from '../../color'


export type Dimensions = { w: number, h: number }


export type Grid = (Color | null)[][]

export function createGrid(width: number, height: number): Grid {
	if (width < 1 || height < 1) throw 'width or height cannot be less than one'
	return Array(height).fill(null).map(() => Array(width).fill(null))
}


export type RenderOptions = {
	bubbleWrap: boolean,
	unicode: boolean,
	fillEmpty: Color | string
}

export function render(grid: Grid, options: RenderOptions = {
	bubbleWrap: false, unicode: true, fillEmpty: '　'
}): string {
	const lines: string[] = []

	for (const row of grid) {
		const line: string[] = []

		for (const cell of row) {
			const value = (cell ?? {})[options.unicode ? 'emoji' : 'code'] ??
				(typeof options.fillEmpty === 'string' ? options.fillEmpty : options.fillEmpty.code)
			line.push(options.bubbleWrap ? `||${value}||` : value)
		}

		lines.push(line.join(''))
	}

	return lines.join('\n')
}
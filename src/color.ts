export type Color = { emoji: string; name: string; code: string; r: number; g: number; b: number; hex: string }

// Block emojis with colors, 9 elements (so far)
export const blocks: Color[] = [
	{ emoji: '🟩', name: 'green', code: 'green_square', r: 0x7c, g: 0xb3, b: 0x42, hex: '#7cb342' },
	{ emoji: '🟫', name: 'brown', code: 'brown_square', r: 0xb7, g: 0x6d, b: 0x54, hex: '#b76d54' },
	{ emoji: '🟦', name: 'blue', code: 'blue_square', r: 0x21, g: 0x96, b: 0xf3, hex: '#2196f3' },
	{ emoji: '🟥', name: 'red', code: 'red_square', r: 0xf4, g: 0x43, b: 0x36, hex: '#f44336' },
	{ emoji: '🟪', name: 'purple', code: 'purple_square', r: 0xab, g: 0x47, b: 0xbc, hex: '#ab47bc' },
	{ emoji: '🟧', name: 'orange', code: 'orange_square', r: 0xff, g: 0x98, b: 0x00, hex: '#ff9800' },
	{ emoji: '🟨', name: 'yellow', code: 'yellow_square', r: 0xff, g: 0xcc, b: 0x32, hex: '#ffcc32' },
	{ emoji: '⬛', name: 'black', code: 'black_large_square', r: 0x42, g: 0x42, b: 0x42, hex: '#424242' },
	{ emoji: '⬜', name: 'white', code: 'white_large_square', r: 0xe0, g: 0xe0, b: 0xe0, hex: '#e0e0e0' }
]

// Heart emojis with colors, 10 elements (so far)
export const hearts: Color[] = [
	{ emoji: '💖', name: 'pink', code: 'sparkling_heart', r: 0xed, g: 0x34, b: 0xa8, hex: '#ed34a8' },
	{ emoji: '🖤', name: 'black', code: 'black_heart', r: 0x18, g: 0x18, b: 0x18, hex: '#181818' },
	{ emoji: '🤍', name: 'white', code: 'white_heart', r: 0xdb, g: 0xdb, b: 0xdb, hex: '#dbdbdb' },
	{ emoji: '💙', name: 'blue', code: 'blue_heart', r: 0x29, g: 0x83, b: 0xf8, hex: '#2983f8' },
	{ emoji: '💚', name: 'green', code: 'green_heart', r: 0x44, g: 0xce, b: 0x28, hex: '#44ce28' },
	{ emoji: '💜', name: 'purple', code: 'purple_heart', r: 0xbc, g: 0x4d, b: 0xf6, hex: '#bc4df6' },
	{ emoji: '🤎', name: 'brown', code: 'brown_heart', r: 0x7e, g: 0x47, b: 0x1f, hex: '#7e471f' },
	{ emoji: '🧡', name: 'orange', code: 'orange_heart', r: 0xff, g: 0x96, b: 0x0d, hex: '#ff960d' },
	{ emoji: '❤️', name: 'red', code: 'red_heart', r: 0xec, g: 0x39, b: 0x2c, hex: '#ec392c' },
	{ emoji: '💛', name: 'yellow', code: 'yellow_heart', r: 0xfc, g: 0xda, b: 0x4b, hex: '#fcda4b' }
]

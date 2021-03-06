export type Color = { emoji: string; name: string; code: string; hex: string }

// Block emojis with colors, 9 elements (so far)
export const blocks: Color[] = [
	{ emoji: '๐ฉ', name: 'green', code: 'green_square', hex: '#7cb342' },
	{ emoji: '๐ซ', name: 'brown', code: 'brown_square', hex: '#b76d54' },
	{ emoji: '๐ฆ', name: 'blue', code: 'blue_square', hex: '#2196f3' },
	{ emoji: '๐ฅ', name: 'red', code: 'red_square', hex: '#f44336' },
	{ emoji: '๐ช', name: 'purple', code: 'purple_square', hex: '#ab47bc' },
	{ emoji: '๐ง', name: 'orange', code: 'orange_square', hex: '#ff9800' },
	{ emoji: '๐จ', name: 'yellow', code: 'yellow_square', hex: '#ffcc32' },
	{ emoji: 'โฌ', name: 'black', code: 'black_large_square', hex: '#424242' },
	{ emoji: 'โฌ', name: 'white', code: 'white_large_square', hex: '#e0e0e0' }
]

// Heart emojis with colors, 9 elements (so far)
export const hearts: Color[] = [
	{ emoji: '๐', name: 'green', code: 'green_heart', hex: '#44ce28' },
	{ emoji: '๐ค', name: 'brown', code: 'brown_heart', hex: '#7e471f' },
	{ emoji: '๐', name: 'blue', code: 'blue_heart', hex: '#2983f8' },
	{ emoji: 'โค๏ธ๏ธ', name: 'red', code: 'red_heart', hex: '#ec392c' },
	{ emoji: '๐', name: 'purple', code: 'purple_heart', hex: '#bc4df6' },
	{ emoji: '๐งก', name: 'orange', code: 'orange_heart', hex: '#ff960d' },
	{ emoji: '๐', name: 'yellow', code: 'yellow_heart', hex: '#fcda4b' },
	{ emoji: '๐ค', name: 'black', code: 'black_heart', hex: '#181818' },
	{ emoji: '๐ค', name: 'white', code: 'white_heart', hex: '#dbdbdb' }
]

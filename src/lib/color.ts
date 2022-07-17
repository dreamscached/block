export type Color = { emoji: string; name: string; code: string; hex: string }

// Block emojis with colors, 9 elements (so far)
export const blocks: Color[] = [
	{ emoji: '🟩', name: 'green', code: 'green_square', hex: '#7cb342' },
	{ emoji: '🟫', name: 'brown', code: 'brown_square', hex: '#b76d54' },
	{ emoji: '🟦', name: 'blue', code: 'blue_square', hex: '#2196f3' },
	{ emoji: '🟥', name: 'red', code: 'red_square', hex: '#f44336' },
	{ emoji: '🟪', name: 'purple', code: 'purple_square', hex: '#ab47bc' },
	{ emoji: '🟧', name: 'orange', code: 'orange_square', hex: '#ff9800' },
	{ emoji: '🟨', name: 'yellow', code: 'yellow_square', hex: '#ffcc32' },
	{ emoji: '⬛', name: 'black', code: 'black_large_square', hex: '#424242' },
	{ emoji: '⬜', name: 'white', code: 'white_large_square', hex: '#e0e0e0' }
]

// Heart emojis with colors, 9 elements (so far)
export const hearts: Color[] = [
	{ emoji: '💚', name: 'green', code: 'green_heart', hex: '#44ce28' },
	{ emoji: '🤎', name: 'brown', code: 'brown_heart', hex: '#7e471f' },
	{ emoji: '💙', name: 'blue', code: 'blue_heart', hex: '#2983f8' },
	{ emoji: '❤️️', name: 'red', code: 'red_heart', hex: '#ec392c' },
	{ emoji: '💜', name: 'purple', code: 'purple_heart', hex: '#bc4df6' },
	{ emoji: '🧡', name: 'orange', code: 'orange_heart', hex: '#ff960d' },
	{ emoji: '💛', name: 'yellow', code: 'yellow_heart', hex: '#fcda4b' },
	{ emoji: '🖤', name: 'black', code: 'black_heart', hex: '#181818' },
	{ emoji: '🤍', name: 'white', code: 'white_heart', hex: '#dbdbdb' }
]

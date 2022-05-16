export type Action = {
	perform: () => void
	undo: () => void
}

export class History {
	private readonly history: Action[]
	private readonly size: number
	private cursor = 0

	public constructor(size: number) {
		this.history = []
		this.size = size
	}

	public do(perform: () => void, undo: () => void) {
		perform()

		this.history.length = this.cursor
		if (this.history.push({ perform, undo }) > this.size) {
			this.history.splice(0, this.history.length - this.size)
		}

		this.cursor++
	}

	public undo() {
		if (this.cursor === 0) return
		this.history[--this.cursor]?.undo()
	}

	public redo() {
		if (this.cursor === this.history.length) return
		this.history[this.cursor++]?.perform()
	}
}

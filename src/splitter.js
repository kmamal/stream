const { Transform } = require('stream')

class Splitter extends Transform {
	constructor (separator, options = {}) {
		super({ ...options, readableObjectMode: true })
		this._saparator = separator
		this._rest = ''
	}

	_transform (chunk, _, done) {
		const data = this._rest + chunk.toString()
		const parts = data.split(this._saparator)
		this._rest = parts.pop()
		for (const part of parts) {
			this.push(part)
		}
		done()
	}

	_flush (done) {
		done(null, this._rest)
	}
}

module.exports = { Splitter }

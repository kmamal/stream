const { Transform } = require('stream')

class Lines extends Transform {
	constructor (options) {
		super({ ...options, readableObjectMode: true })
		this._rest = ''
	}

	_transform (chunk, _, done) {
		const data = this._rest + chunk.toString()
		const lines = data.split('\n')
		this._rest = lines.pop()
		for (const line of lines) {
			this.push(line)
		}
		done()
	}

	_flush (done) {
		done(null, this._rest || undefined)
	}
}

module.exports = { Lines }

const { Transform } = require('stream')

class Filter extends Transform {
	constructor (fnFilter, options = {}) {
		super({
			...options,
			readableObjectMode: true,
			writableObjectMode: true,
		})

		this._fnFilter = fnFilter
	}

	_transform (chunk, _, done) {
		if (this._fnFilter(chunk)) { this.push(chunk) }
		done()
	}
}

module.exports = { Filter }

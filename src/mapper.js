const { Transform } = require('stream')

class Mapper extends Transform {
	constructor (fnMap, options) {
		super({
			...options,
			readableObjectMode: true,
			writableObjectMode: true,
		})

		this._fnMap = fnMap
	}

	_transform (chunk, _, done) {
		done(null, this._fnMap(chunk))
	}
}

module.exports = { Mapper }

const { once } = require('events')

const kRest = Symbol("rest")

const read = async (stream, size) => {
	readRest: {
		const rest = stream[kRest]
		if (!rest) { break readRest }
		const result = rest.slice(0, size)
		const remaining = rest.slice(result.length)
		stream[kRest] = remaining.length > 0 ? remaining : 0
		return result
	}

	let data
	for (;;) {
		data = stream.read(size)
		if (data !== null) { break }
		if (stream.destroyed) { return null }
		await once(stream, 'readable')
		continue
	}

	if (data.length > size) {
		stream[kRest] = data.slice(size)
		data = data.slice(0, size)
	}

	return data
}

module.exports = { read }

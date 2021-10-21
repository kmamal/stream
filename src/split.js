
const split = (separator) => async function * _split (source) {
	let rest = ''
	for await (const value of source) {
		const lines = (rest + value.toString()).split(separator)
		rest = lines.pop()
		for (const line of lines) { yield line }
	}
	yield rest
}

module.exports = { split }


const filter = (fn) => async function * _filter (source) {
	for await (const value of source) {
		if (!fn(value)) { continue }
		yield value
	}
}

module.exports = { filter }

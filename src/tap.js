
const tap = (fn) => async function * _tap (source) {
	for await (const value of source) {
		fn(value)
		yield value
	}
}

module.exports = { tap }

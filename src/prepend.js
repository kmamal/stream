
const prepend = (first) => async function * _append (source) {
	yield first
	for await (const value of source) { yield value }
}

module.exports = { prepend }

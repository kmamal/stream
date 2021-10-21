
const append = (last) => async function * _append (source) {
	for await (const value of source) { yield value }
	yield last
}

module.exports = { append }


const join = (joiner) => async function * _join (source) {
	const { value: first, done } = await source.next()
	if (done) { return }
	yield first
	for await (const value of source) {
		yield joiner
		yield value
	}
}

module.exports = { join }

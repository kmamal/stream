
const map = (fn) => async function * _map (source) {
	for await (const value of source) {
		yield fn(value)
	}
}

module.exports = { map }

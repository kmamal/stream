const { once } = require('events')

const write = async (stream, data) => {
	const more = stream.write(data)
	if (more) { return }
	await once(stream, 'drain')
}

module.exports = { write }

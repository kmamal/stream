const { once } = require('events')

const write = async (stream, data) => {
	const chunk = Buffer.from(data)
	const more = stream.write(chunk)
	if (more) { return }
	await once(stream, 'drain')
}

module.exports = { write }

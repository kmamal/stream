
const _consume = async (stream) => {
	const chunks = []
	for await (const chunk of stream) {
		chunks.push(chunk)
	}
	return chunks
}

const consumeBuffer = async (stream) => {
	const chunks = await _consume(stream)
	return Buffer.concat(chunks)
}

const consumeString = async (stream) => {
	const chunks = await _consume(stream)
	return chunks.join('')
}

module.exports = {
	consumeBuffer,
	consumeString,
}

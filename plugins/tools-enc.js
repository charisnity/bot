import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input JavaScript'
	let enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['enc', 'encrypt']
handler.tags = ['tools']
handler.command = /^(enc(rypt)?)$/i

export default handler
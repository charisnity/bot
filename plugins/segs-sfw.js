import fetch from 'node-fetch'

let list = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe']

let handler = async (m, { conn, command: cmd, usedPrefix: _p, args }) => {
	let type = (args[0] || '').toLowerCase()
	let param = list.findIndex(v => v.toLowerCase() == type)
	if (param == -1) {
		let arr = []
		for (let x of list.sort()) arr.push({ title: x.capitalize(), rowId: `${_p}${cmd} ${x}` })
		await conn.sendMessage(m.chat, { text: `Type${type ? ` ${type}` : ''} Not Available`, footer: 'Please choose one of the type of nsfw that is available on the bot', title: null, buttonText: 'List Type', sections: [{ rows: arr }] }, { quoted: m })
	} else {
		param = list[param]
		let res = await fetch('https://api.waifu.pics/sfw/' + param)
		if (!res.ok) throw await res.text()
		let json = await res.json()
		if (!json.url) throw json
		let templateButtons = [
			{ urlButton: { displayText: 'Source', url: json.url }},
			{ quickReplyButton: { displayText: 'Next', id: `${_p}${cmd} ${param}` }}
		]
		await conn.sendMessage(m.chat, { image: { url: json.url }, caption: `Type: ${param.capitalize()}`, footer: null, templateButtons }, { quoted: m })
	}
}
handler.command = /^sfw$/i
handler.limit = false
handler.private = true

export default handler
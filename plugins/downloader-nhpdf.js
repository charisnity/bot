import fetch from 'node-fetch'
import { extractImageThumb } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply(wait)
	let res = await fetch('https://nhentai.unknown.my.id/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let v = await fetch('https://nhentai.unknown.my.id/nhentai/' + code)
	let json2 = await v.json()
	let buffer = await (await fetch(json.result.images.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: json2.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf',
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            mediaUrl: `${json2.result}`,
            title: `${json.result.title.english}`, 
            body: wm,
            description: wm,
            mediaType: 2,
          thumbnail: thumb,
         mediaUrl: `${args}`
        }
     }
  })
}
handler.help = handler.alias = ['nhpdf']
handler.tags = ['downloader']
handler.command = /^(nhpdf|nhentai)$/i
handler.limit = true
handler.nsfw = false

export default handler
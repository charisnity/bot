import fs from 'fs'
  
function handler(m) {
  
	const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': 'Owner UnknownBot', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('media/me.jpg'), thumbnail: fs.readFileSync('media/me.jpg'),sendEphemeral: true}}}

  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Rifai\nitem1.TEL;waid=6281393227036:6281393227036\nitem1.X-ABLabel:Owner(Bussy.\nURL;My Web: https://unknown.my.id\nEMAIL;Email Owner: rfiunknown62@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6285298423679:6285298423679\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: fkontak })
}

handler.help = ['owner']
handler.tags = ['main']

handler.command = /^(owner|creator)$/i

export default handler
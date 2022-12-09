import { sticker } from '../lib/sticker.js'
import WSF from 'wa-sticker-formatter'

let handler = async (m, { conn, text }) => {
    
      let wsf = false
      let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
     try {
    let { registered } = global.db.data.users[m.sender]
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
  //  if (!packname) packname = global.packname
    let packname = `Sticker by ${name}`
    let author = global.packname
      let img = `https://yog-apikey.herokuapp.com/api/maker/ttp?apikey=YogGanz&text=${teks}`
      wsf = new WSF.Sticker(img, {
        pack: packname,
        author: author,
        crop: false,
        type: 'full',
      })
     } catch (e) {
    
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.toBuffer()
      if (sticBuffer) await conn.sendMessage(m.chat, { sticker: sticBuffer }, {
        quoted: m,
        mimetype: 'image/webp',
        ephemeralExpiration: 86400
      })
    }
  }
  /*  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, `https://yog-apikey.herokuapp.com/api/maker/ttp?apikey=YogGanz&text=${teks}`, global.packname, global.author)
    if (stiker) return conn.sendImageAsSticker(m.chat, stiker, m, { packname: global.packname, author: global.author })
    throw stiker.toString()*/
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler
/*
let handler = async (m, { conn, text }) => {
if (text) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
   let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
  if (stiker) return conn.sendImageAsSticker(m.chat, stiker, m, { packname: global.packname, author: global.author })
    throw stiker.toString()

} else m.reply('Textnya apa om?')
}

handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

module.exports = handler
*/
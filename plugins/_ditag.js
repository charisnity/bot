import fetch from "node-fetch"
import fs from "fs"

export async function all(m) {

  //Kalo mau menggokil pake ini
  //let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => thumb)
let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/0b82751a38f0ae580f5c3.jpg')
  
  let stc1 = fs.readFileSync('media/sticker/aura.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika bot ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
          
            await this.sendMessage(m.chat, { sticker : stc1, thumbnail: thumb , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281393227036',
title: '「 ❔ 」',
body: 'Iya Ada Apa Kak???',
sourceUrl: 'https://wa.me/6281393227036', 
thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
        }
    } catch (e) {
        return
    }

                                
}

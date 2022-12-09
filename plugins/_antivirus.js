let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
  

  let isVirtex = /৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ|٩٩|⃟҉҈̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥ ⃟҉҈̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥ ⃟҉҈̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥ ⃟҉҈̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥ ⃟҉҈̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥/i.exec(m.text) // tambahin sendiri
    if (isVirtex || m.text.length > 30000 ) { //Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
      /* await conn.fakeReply(m.chat , `Virus detected, sent by @+${m.sender.split`@`[0]} 🐷
By ${wm}`.trim(), '0@s.whatsapp.net', wm, 'status@broadcast') */
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
                await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        await conn.sendMessage(m.chat, { delete: m.key })
        
     //   await conn.sendMessage(m.key.remoteJid, 'ngapain dek', m)
       for (let jid of global.owner.map(v => v + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    
conn.fakeReply(jid , `@+${m.sender.split`@`[0]} telah mengirim virus
By ${wm}`.trim(), '0@s.whatsapp.net', wm, 'status@broadcast')
    }
}
}
export default handler
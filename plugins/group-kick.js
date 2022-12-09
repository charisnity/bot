import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, isAdmin, isOwner, participants }) => {
    if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
    if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await conn.groupParticipantsUpdate(m.chat, [usr], "remove"); return;
    }
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`Succes kick ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: kickedUser })

}
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|o-)$/i

handler.group = true
handler.botAdmin = true
handler.owner = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

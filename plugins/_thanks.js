import fs from 'fs'
let handler = async (m) => {
let name = m.pushName || conn.getName(m.sender)
let stc = fs.readFileSync('media/aura.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', `*Sama-Sama* ${name}`, 'status@broadcast')
}
handler.customPrefix = /thanks|terima kasih|terimakasih/i
handler.command = new RegExp

export default handler
let handler = async (m, { conn, usedPrefix, isAdmin, isBotAdmin }) => {
  
    if (!isAdmin) return m.reply("Delete pesan member hanya tersedia untuk admin only")
    if (!isBotAdmin) return m.reply("Bot tidak dapat menghapus pesan member, karena bot bukan admin grup!!")
    
    try {
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
    } catch {
    m.reply("Tidak dapat memproses command")
    }
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^(d|del|delete|unsend?)$/i
handler.limit = false

export default handler
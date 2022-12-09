import fs from 'fs'
import os from 'os'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})

let handler = async (m, { conn }) => {
	let chats = Object.entries(conn.chats).filter(([a, b]) => a && b.isChats)
	let groups = chats.filter(([a]) => a.endsWith('g.us'))
	  let totalreg = Object.keys(global.db.data.users).length
    let session = (eval(fs.readdirSync('./.sessions').map(v => fs.statSync('./.sessions/' + v).size).join('+')) / 1024 / 1024).toFixed(2)
	let txt = `
*BOT:*
- ${groups.length} Group
- ${chats.length - groups.length} Personal Chats
- ${chats.length} Total Chats
- Database : *${totalreg}*
- Runtime: (${new Date(~~(process.uptime()) * 1000).toTimeString().split(' ')[0]})

*SERVER:*
- Platform: ${process.platform}
- Nodejs: ${process.version}
- Session Size: ${session} MB
- Memory: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
`
	m.reply(txt.trim())
}
handler.command = /^(stats)$/i

export default handler
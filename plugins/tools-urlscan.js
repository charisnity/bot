import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  if (!text) throw `Masukkan link`
let json = await fetch(`https://urlscan.io/api/v1/search/?q=${text}`)
        let jsons = await json.json()
        let caption = jsons.results.map((x, index) => {
        return `*Result:* ke - ${1 + index}\n
*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*domain:* ${x.task.domain}
*time:* ${x.task.time}
*uuid:* ${x.task.uuid}
*url:* ${x.task.url}
*uniqIPs:* ${x.stats.uniqIPs}
*uniqCountries:* ${x.stats.uniqCountries}
*dataLength:* ${x.stats.dataLength}
*encodedDataLength:* ${x.stats.encodedDataLength}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*result:* ${x.result}`.trim()
    }).join('\n\n')
        await conn.reply(m.chat, caption, m)
}
handler.command = handler.help = ['urlscan']
handler.tags = ['tools']

export default handler
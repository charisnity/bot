import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 8.8.8.8`

let result = await fetch(`https://fatiharridho.herokuapp.com/api/tools/iplookup?ip=${args[0]}`)
let x = await result.json()
let caption = `*Country:* ${x.result.country}
*Region:* ${x.result.region}
*City:* ${x.result.city}
*Latitude:* ${x.result.latitude}
*Longtitude:* ${x.result.longtitude}
*ISP:* ${x.result.isp}
*Domain:* ${x.result.domain}
*Weather:* ${x.result.weather}
*Time Zone:* ${x.result.time_zone}
*Local Time:* ${x.result.local_time}
*Category:* ${x.result.category}
*Proxy:* ${x.result.proxy}
*Provider:* ${x.result.provider}

`
await conn.reply(m.chat, caption, m)
}
handler.command = handler.help = ['iplookup']
handler.tags = ['tools']

export default handler
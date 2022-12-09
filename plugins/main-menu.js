import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix: _p }) => {

  let user = `@${m.sender.split('@')[0]}`
    
  
let tags = {
  'main': 'MAIN',
  'sticker': 'STICKER',
  'group': 'GROUP',
  'internet': 'INTERNET',
  'downloader': 'DOWNLOADER',
  'maker': 'MAKER',
  'tools': 'TOOLS',
}
//━━━━━━━━[ MENU DEFAULT ]━━━━━━━━//
const defaultMenu = {
  before: `
Hi, %name! 👋
  
*Time:* %time WIB
*Date:* %date
*Runtime:* %uptime 
%readmore`.trimStart(),
  header: '┌──⭓ *%category*',
  body: '│⭔ %cmd %islimit %isPremium',
  footer: '└───────⭓',
  after: `
`,
}



  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
//━━━━━━━━[ SETTING BIO ]━━━━━━━━//
    let bio = `i'm UnknownBot 🤖 | Aktif Selama : ${uptime} `
     await conn.setStatus(bio)
    
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',
'https://telegra.ph/file/6efff0ec4adb39053b5b3.mp4',
'https://telegra.ph/file/e7b355244bc81b5231b6a.mp4',           'https://telegra.ph/file/067b2cb3312837533239c.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]

   // const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    // if (m.isGroup) return conn.sendButton(m.chat, text.trim(), conn.getName(conn.user.jid), pp, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
   // await conn.sendHydrated(m.chat, text.trim(), conn.user.name, null, `https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE`, 'Group Bot', null, null, [['Dashboard', `${_p}dashboard`], ['Owner', `${_p}owner`], ['Status', `${_p}stats`]])
     conn.sendMessage(m.chat, { video: { url: vid  }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: await conn.getName(conn.user.jid) , templateButtons:
       [{ 
         urlButton: {displayText: 'Website', url: 'https://unknown.my.id'}},
        { urlButton: {displayText: 'Group Bot', url: 'https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE'}},
        { quickReplyButton: { displayText: 'Dashboard', id: `${_p}Dashboard` }}, 
        { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }} ] })
        
    // await conn.sendButton(m.chat, text.trim(), conn.user.name, null, [['Status', `${_p}stats`], ['Speedtest', `${_p}ping`], ['Owner', `${_p}owner`]], m)
    // await conn.relayMessage(m.chat, { requestPaymentMessage: { noteMessage: { extendedTextMessage: { text: text.trim() }}, currencyCodeIso4217: ['BRL', 'USD', 'INR'].getRandom(), amount1000: ~~(Math.random() * 1e4), requestFrom: m.sender }}, {})
  } catch (e) {
    m.reply('An error occurred')
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.alias = ['menu', 'help']
handler.command = /^(menu|help|\?)$/i
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
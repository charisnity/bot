import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['6283809157951', 'wahyu']
]



 // ['6283820073017', '436506665652696', '6285240750713']

  // [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Rifai\nitem1.TEL;waid=6281393227036:6281393227036\nitem1.X-ABLabel:Owner(Bussy.\nURL;My Web: https://rfiunknown.github.io/dist\nEMAIL;Email Owner: rfiunknown62@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6285298423679:6285298423679\nEND:VCARD`
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  rrul: 'https://api-rull.herokuapp.com',
  hadi: 'http://hadi-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta'
}

 /*global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
] */
global.thumbnailUrl = [
'https://telegra.ph/file/3719d2bef2fb7309939c8.jpg',
'https://telegra.ph/file/59eff445f4f3f86292846.jpg',
'https://telegra.ph/file/472edc7dc9127e6f8c921.jpg',
'https://telegra.ph/file/fd29362ccaf5baed75356.jpg',
'https://telegra.ph/file/fcf5041175a0c9badde25.jpg',
'https://telegra.ph/file/0c94185bcf03a6c9fe40a.jpg',
'https://telegra.ph/file/63a3bfec68934c30bf437.jpg',
'https://telegra.ph/file/b77405bd9176818b1b51d.jpg',
'https://telegra.ph/file/a84a99cf8654fb80e70e3.jpg',
'https://telegra.ph/file/e9f57d73bc8cbd8549eda.jpg',
'https://telegra.ph/file/abf6edcbcc2c6f0c299d3.jpg',
'https://telegra.ph/file/b91be5e94bb96f5ba6dc5.jpg',
'https://telegra.ph/file/4e72e556a95073c867fbe.jpg',
'https://telegra.ph/file/1df0ec733dc97df099c93.jpg',
'https://telegra.ph/file/c801f4bdc38dcfa785a4a.jpg',
'https://telegra.ph/file/52923047565986da85cca.jpg',
'https://telegra.ph/file/56f32af05afc29b5f08c9.jpg',
'https://telegra.ph/file/17cf24f32725cb7c29d9c.jpg',
'https://telegra.ph/file/68be3dadd833af20a955a.jpg',
'https://telegra.ph/file/fd90a105a0cff54e18bb1.jpg'
]


// Sticker WM
global.packname = `© πt`
global.author = ' made in wahyu'
global.thumb = readFileSync('media/me.jpg')
//global.thumb = ('https://telegra.ph/file/0b82751a38f0ae580f5c3.jpg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'made in wahyu'
global.wm = '© πt'
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」\nʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'
const more = String.fromCharCode(8206)
global.readMore = more.repeat(4001)
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

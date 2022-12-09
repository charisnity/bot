let handler = m => m
import { aiovideodl, savefrom } from '@bochilteam/scraper'
import fetch from 'node-fetch'
handler.before = async function (m) {
    let isfb = /(?:(?:http|https):\/\/)?(?:www.)?(?:facebook.com|fb.watch|tiktok.com|instagram.com|instagr.am|instagr.com|twitter.com|souncloud.com|youtu(?:\.be\/|be.com)).*/g.test(m.text)
    if (m.text.startsWith('https://') && isfb && !m.fromMe) {
      m.reply(wait)
//import { savefrom } from '@bochilteam/scraper'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

  let [link, x] = m.text.split` `
    let res = await savefrom(link).catch(_ => null)
if (!res) return conn.reply(m.chat, 'Gagal Download Video',m )
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
let shrt = await shorten(url)
conn.sendButton(m.chat, `*Caption* : ${res?.meta?.title}\n*Url:* ${shrt}`, wm, url, [['Audio', '.tomp3']], m)
//conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title + '\n\nRho_Bot v2'|| '' }, { quoted: m })

}
return !0
} 
export default handler

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
} 
async function shorten(url) {
    const body = {
        originalURL: url,
        domain: "s.rhobot.my.id"
    };
    
    const options = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'pk_kQX8K5RTxXZ4Yqt2'
      },
      method: 'POST',
      body: JSON.stringify(body)
    };

    const resp = await fetch('https://api.short.io/links/public', options)
    const data = await resp.json();
    const result = data.secureShortURL;

    return result;
  }
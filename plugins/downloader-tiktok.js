import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
   if (!args[0]) throw `Input tiktok url example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    if (!args[0]) throw 'Input URL' 
    if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(args[0])) throw 'Invalid URL'
    let url = (await fetch(args[0])).url
    let data = await tiktokdlv2(url)
    let meta = await getInfo(url)
    await m.reply(wait)
    let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}tomp3` }]
    conn.sendMessage(m.chat, { video: { url: data.video.no_watermark }, caption: `*Nickname:* ${nickname}`  + '\n' + `*Description:* ${description}` || 'Downloader by ' + wm , footer: await (data.video.no_watermark ) || ' ', buttons }, { quoted: m })
   // conn.sendMessage(m.chat, { video : { url:data.video.no_watermark }, caption: description }, { quoted: m })
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function getInfo(url) {
    // url = (await fetch(url)).url
    let id = url.split('?')[0].split('/')
    let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json().catch(_ => {})
    return res?.seoProps?.metaParams
}

async function shortUrl(url) {
    return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
//Thanks to Rhosad for this :v
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
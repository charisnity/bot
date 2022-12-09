//let fs = require('fs')
//let moment = require('moment-timezone')

let handler = m => m
import { Sticker } from 'wa-sticker-formatter'
handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('Status Wangsaf')
    }
   // let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings
    let setting = db.data.settings
    let user = global.db.data.users[m.sender]
      
       let pp1 = 'https://telegra.ph/file/0b82751a38f0ae580f5c3.jpg'
   
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
 /*    let isinvit = /sewa/i.exec(m.text)
  if (isinvit && !m.fromMe  ){
       
        this.sendButton(m.chat, `
「 *Sewa Bot* 」
*Harga Full Fitur*
1 Minggu = Rp. 5.000
2 Minggu = Rp. 7.000
1 Bulan = Rp. 15.000
2 Bulan = Rp. 20.000
Permanen = Rp. 30.000
(Free premium sesuai masa sewa)

*Harga Group JB*
Permanen = Rp. 10.000
*Fitur yg Aktif*
> Welcome / Leave
> Antilink
`.trim(), wm, pp1, [['Pemilik Bot', '.owner'], ['Payment', '.donasi']], m, {asLocation: true})
    }*/

   
 /*  let isyt = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v|shorts\/)))([-a-zA-Z0-9_]{11,})/g.test(m.text)
    if (m.text.startsWith('https://') && isyt && !m.fromMe) {
        let [linkyt, teks] = m.text.split` `
       this.send2Button(m.chat, `*terdeteksi link dari Youtube yang dikirim*\nbisa langsung Download dengan pencet tombol dibawah 👇`, wm, 'Video', `.ytmp4 ${linkyt}`,'Audio', `.ytmp3 ${linkyt}`, m)
    } */
  

 /* update status
  let sett = db.data.settings[this.user.jid]
    if (new Date() * 1 - sett.status > 59000) {
        
        let wibs = moment.tz('Asia/Jakarta').format('HH:mm')
        let totalreg = Object.keys(global.db.data.users).length
        let teks = `i'm Rhobot 🤖 | Update : ${wibs} | ${totalreg} Pengguna | Mode : ${global.opts['self'] ? 'Self' : 'publik' } | By Rhosad `
        await this.setBio(teks).catch(_ => _)
        sett.status = new Date() * 1
    } */
    //
    


  //  backup db
    if (!setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    } 
  
    return !0
}

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
                              }

async function createSticker(img) {
	return (new Sticker(img, { type: 'full' })).toBuffer()
}
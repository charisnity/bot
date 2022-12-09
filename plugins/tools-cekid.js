import {cekcodid, cekffid, cekmlid} from '../lib/codid.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let game = 570098876
let [userid, zone] = text.split`.`
if (!userid) throw `Pengecekan True ID beberapa Games.\n*Supported Games :\nFree Fire, Mobile Legends, Call of Duty\n\nuntuk Games Mobile Legends menggunakan zona id.\n*Contoh : .cekid 960207848.12821\n\n Games lainnya hanya menggunakan ID Game saja.`
let ff = await cekffid(userid)
let ml = await cekmlid(userid, zone)
let cod = await cekcodid(userid)

  if (ff.result && !zone) throw `✓ Game : FREE FIRE\n✓ Nickname : ${ff.result}`
  if (cod.result && !zone) throw `✓ Game : CALL OF DUTY\n✓ Nickname : ${cod.result}`
  if (ml.result) throw `✓ Game : MOBILE LEGENDS\n✓ Nickname : ${ml.result}`
  else throw 'ID Game tidak ditemukan di game yang kami support'
}
handler.help = ['cekid (idgame)', 'cekid (id, zone)']
handler.tags = ['tools']
handler.command = /^cekid$/i


export default handler
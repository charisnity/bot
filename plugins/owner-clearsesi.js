import path from 'path'
import fs from 'fs'
let handler = async(m, { conn, command, usedPrefix }) => {

fs.readdir('./.sessions', (err, files) => {
    if (err) {
        console.log(err)
    }

    files.forEach(file => {
        const fileDir = path.join('./.sessions', file)

        if (file !== 'creds.json') {
            fs.unlinkSync(fileDir)
        }
    })
})
            
}


handler.command = /^(clearsesi)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
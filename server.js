import express from 'express'
import bodyParser from 'body-parser'
import { createServer } from 'http'
import path from 'path'
// import { Socket } from 'socket.io'
import { toDataURL } from 'qrcode'
import fetch from 'node-fetch'
import fs from 'fs'

function connect(conn, PORT) {
    let app = express()
    app.set('view engine', 'ejs')
    // console.log(app)
    let server = createServer(app)
    // app.use(express.static(path.join(__dirname, 'views')))
    let _qr
    conn.ev.on('connection.update', async up => {
    	// console.log(up)
        if (up.qr) _qr = await toDataURL(up.qr)
        else if (up.connection === 'close') connect(conn, ~~(Math.random() * 1e4))
    })
    
    app.get('/', (req, res) => res.send('Hello World!'))
    app.get('/web', (req, res) => res.render('/web'))
    
    app.get('/qr', (req, res) => res.render('index', { qrcode: _qr }))
    
    app.get('/file/:id', (req, res) => res.download('./tmp/file/' + req.params.id, req.params.id, (e) => res.send(String(e))))

    app.get('/send', async (req, res) => { 
 let tujuan = req.query.tujuan
    if (!tujuan) return res.send('masukkan parameter tujuan')
 let q = req.query.pesan
 
let result = tujuan + '@s.whatsapp.net'
//let name = await conn.getName(result)
 let pesan = q.replace(/@salam/g, ucapan)
  if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) { 
  await conn.fakeReply(tujuan + '@s.whatsapp.net', pesan, '0@s.whatsapp.net', wm, 'status@broadcast')
    res.send('Sukses!') 
    } else {
      res.send(`Nomer ${tujuan} tidak terdaftar di WhatsApp`)
    }
  })
  app.get('/blast', async (req, res) => { 
 let tujuan = req.query.tujuan
    if (!tujuan) return res.send('masukkan parameter tujuan')
let json = tujuan.split`;`
 let q = req.query.pesan
 let jsonq = q.split`;`
    for (let i = 0; i < json.length; i++) {

await conn.delay(15000)      
let result = json[i] + '@s.whatsapp.net'
//let name = await conn.getName(result)
 let pesan = jsonq[i].replace(/salam/g, global.ucapan)
  if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) { 
  await conn.fakeReply(json[i] + '@s.whatsapp.net', pesan, '0@s.whatsapp.net', wm, 'status@broadcast')
   // res.send('Sukses!') 
    } else {
      //res.send(`Nomer ${tujuan} tidak terdaftar di WhatsApp`)
    }
    }
    res.send(`sukses mengirim ke ${json.length} tujuan`)
  })
	app.get('/nowa', async (req, res) => {
		let q = req.query.number, regex = /x/g
		if (!q) return res.send('Input Parameter Number Parameter')
		if (!q.match(regex)) return res.send('Parameter Number Must Fill With One Letter "x"')
		let random = q.match(regex).length, total = Math.pow(10, random), array = []
		for (let i = 0; i < total; i++) {
			let list = [...i.toString().padStart(random, '0')]
			let result = q.replace(regex, () => list.shift()) + '@s.whatsapp.net'
			if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
				let info = await conn.fetchStatus(result).catch(_ => {})
				array.push({ jid: result, exists: true, ...info })
			} else {
				array.push({ jid: result, exists: false })
			}
		}
		res.json({ result: array })
	})
  app.use(bodyParser.json());
  app.post('/gc', async (req, res) => {
   let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
    let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl:'https://github.com', thumbnail: fs.readFileSync('me.jpg')}}}
let imgr = waifu.getRandom()
    let json = req.body
    if (!json.link) return res.send('Masukkan parammeter link')
    let [_, code] = json.link.match(linkRegex) || []
    if (!code) return res.send('Link invalid')
  try {
    
    let join = await conn.groupAcceptInvite(code)
    let name = await conn.getName(join).catch(_ => null)
      
    res.send(`sukses join ke ${name || res}`)
    await conn.sendButton(join, `${conn.user.name} adalah bot whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang melalui web Official.\nhttps://rhobot.my.id/join\n\nKetik .menu untuk melihat daftar perintah\nBot akan keluar secara otomatis setelah *1 hari*\n\nHubungi owner supaya bot stay lebih lama di group ini`.trim(), wm, imgr, [['Menu', `.menu`], ['Owner', `.owner`]], ftroli, { mentions: [] })
    let chats = global.db.data.chats[join]
    chats.expired = +new Date() + 1 * 1000 * 60 * 60 * 24
} catch (error) {
    res.send('Maaf sedang error, atau tidak bisa masuk group')
  }
    res.end()
})
  
  app.post('/api', async (req, res) => {

console.log("Method called is -- ", req.body)
    let json = req.body
    let tujuan = json.tujuan
    if (!tujuan) return res.send('masukkan parameter tujuan')
 let q = json.pesan
 
let result = tujuan + '@s.whatsapp.net'
//let name = await conn.getName(result)
 let pesan = q.replace(/@salam/g, global.ucapan)
  if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) { 
  await conn.fakeReply(tujuan + '@s.whatsapp.net', pesan, '0@s.whatsapp.net', wm, 'status@broadcast')
    res.send('Sukses!') 
    } else {
      res.send(`Nomer ${tujuan} tidak terdaftar di WhatsApp`)
  }
  // res.send('sukses ' + req.body)
  // res.end()
  })
    
    // let io = new Socket(server)
    // io.on('connection', socket => {
    //     let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
    //     socket.on('disconnect', unpipeEmit)
    // })
    
    server.listen(PORT, () => {
        console.log('App listened on port', PORT)
        keepAlive()
    })
}

function keepAlive() {
    const url = `https://UnknownBot-md.rfuunknown.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 30 * 1000)
}

export default connect

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] Ingrese un texto*\n*Ejemplo:*\n*#romanticmessages Shadow*'        
let res = `https://api-alc.herokuapp.com/api/photooxy/romantic-messages?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)}
handler.command = /^(romanticmessages)$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler

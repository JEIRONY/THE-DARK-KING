let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] Ingrese un texto*\n*Ejemplo:*\n*#romanticdouble Shadow*'        
let res = `https://api-alc.herokuapp.com/api/photooxy/romantic-double?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)}
handler.command = /^(romanticdouble)$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
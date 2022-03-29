let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
Hola 👋🏻, si deseas que tu grupo aparezca como oficial por favor contactate a este numero de aquí abajo The 𝑱𝑬𝑰𝑺𝑶𝑵  - Bot

➤ Grupos oficiales del Bot (son grupos de ayuda del bot):

♛  https://chat.whatsapp.com/El6hMgOd2SJ3v4LHXjON0l

♛  https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
✢ SI DESEAS QUE TU GRUPO SEA UNO DE LOS OFCIALES POR FAVOR ESCRIBEME AL INTERNO.

`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": ' ༒☬༒ ᴊᴇɪʀᴏɴʏ  ༒☬༒', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler

let fs = require("fs")
let handler = async(m, { conn, args, text, usedPrefix: _p, usedPrefix, command }) => {
let vn = './media/bot.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "573152139466@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'WhatsApp Bot Oficial', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "573152139466@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  
conn.sendButton(m.chat, `*Hola amig@ que onda, dime en que puedo ser util?*`, '©JEISON-BOTS', '─═ ＭＥＮＵ ═─', `${usedPrefix}menu`, 'conversation', { sendEphemeral: true, quoted: estilo })
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })
}
handler.command = /^(ot)$/i
module.exports = handler

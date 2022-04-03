let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Bot.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/Hola.mp3'
let menu =`
=☆=☆=【MENU MINECRAFT】=☆=☆=
★━━━━━━━━━━━━━━━━━━━━★
║◆ *✨𝗛ola, ${username}!!*
★━━━━━━━━━━━━━━━━━━━━★
║◆ TOMA AQUI TIENES el link de apkadmin para que lo disfrutes jugando con tus amigos
⇓⇓⇓⇓⇓⇓
║◆ https://apkadmin.com/zag7eowf6hpk/Minecraft_PE_1.18.12.01OFICIAL_JEIRONY-BOTS.apk.html
★━━━━━━━━━━━━━━━━━━━━★
╯`.trim()
let mentionedJid = [who]
conn.send4ButtonImg(m.chat, pp, menu, '©THE DARK KING BOT\n █║▌║││█║▌║▌║', '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`,  '𝙼𝙴𝙽𝚄', `#menu`, '𝕄𝔼𝔾𝔸', `#descarga2`, '𝕄𝔼𝔻𝕀𝔸𝔽𝕀ℝ𝔼', `#descarga`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(descarga3)$/i
handler.fail = null
module.exports = handler

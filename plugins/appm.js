let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Bot.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/Minecraft.apk'
let menu =`
=☆=☆=【MENU MINECRAFT】=☆=☆=
★━━━━━━━━━━━━━━━━━━━━★
 *✨𝗛ola, ${username}!!*
★━━━━━━━━━━━━━━━━━━━━★

◆HOLA MI PANA COMO ESTAS.
AQUI ABAJO TE DEJO ALGUNOS LINKS DE DESCARGA ESPERO SEA DE TU AGRADO.`.trim()
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, pp, menu, '©THE DARK KING BOT\n █║▌║││█║▌║▌║', '𝕄𝔼𝔾𝔸', `#descarga2`, '𝐀𝐏𝐊𝐀𝐃𝐌𝐈𝐍', `#descarga`, m, false, { contextInfo: { mentionedJid }})   
type: 'Message', 
ptt: true 
})
handler.command = /^(app|apk|APP|APK|minecraft)$/i
handler.fail = null
module.exports = handler

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
let menu =`
XX`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, '©THE DARK KING', '𝕄 𝔼 ℕ 𝕌   ℙ ℝ 𝕀 ℕ ℂ 𝕀 ℙ 𝔸 𝕃', `#menu`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler

const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let THE DARK KING = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, THE DARK KING, "*Navidad 🧑‍🎄*", '©THE DARK KING', '🎄 SIGUIENTE 🎄', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(navidad)$/i
handler.fail = null
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
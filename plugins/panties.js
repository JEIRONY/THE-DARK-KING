let axios = require("axios")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*Panties*", '©THE DARK KING', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, '🔥 LABIBLIA 🔥', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }}) }
handler.command = /^(panties)$/i
handler.fail = null
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler

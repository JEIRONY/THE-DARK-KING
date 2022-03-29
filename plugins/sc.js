//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/1eyNT8k.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/1eyNT8k.jpg')).buffer()
let text = `*https://www.youtube.com/channel/UCN9wxOL23R-6hA2XgupyWZQ*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: '𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: '►─═ ＪＥＩＲＯＮＹ ═─◄',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler

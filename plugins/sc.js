//Codigo by THE DARK KINGV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/KVqY6z3.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/KVqY6z3.jpg')).buffer()
let text = `*https://github.com/JEIRONY/THE-DARK-KING*`.trim()
let text = `*https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'ππ΄πΏπΎππΈππΎππΈπΎ π³π΄π» π±πΎπ',
body: 'THE DARK KING',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler

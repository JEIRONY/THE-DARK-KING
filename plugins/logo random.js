let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
response = args.join(' ').split('|')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
if (!args[0]) throw '*[❗] Ingrese un texto*\n*Ejemplo:*\n*#logorandom Shadow*'        
let res = `https://api-alc.herokuapp.com/api/photooxy/${pickRandom(global.logos)}?texto=${response[0]}&apikey=ConfuMods`
conn.sendButtonImg(m.chat, res, "*Logo random terminado*", '©THE DARK KING', 'SIGUIENTE', `${usedPrefix + command} ${text}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(logorandom)$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.logos = [
"text-on-scary", 
"coffee-cup",
"teks-cup",
"funny-cup",
"love-messages",
"romantic-messages",
"romantic-messages",
"flaming-fire",
"flaming-fire",
"romantic-double",
"burn-paper",
"text-on-scary", 
"under-grass",
"shadow-sky",
"love-messages",
"romantic-messages",
"coffee-cup",
"teks-cup",
"romantic-double"
] 

let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
MENU DE AUDIOS
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

°  Quien es tu sempai botsito 7w7
°  Te diagnostico con gay
°  A nadie le importa
°  Fiesta del admin
°  Fiesta del admin 2
°  Vivan los novios
°  Feliz cumpleaños
°  Noche de paz
°  Buenos dias
°  Audio hentai
°  Chica lgante
°  Feliz navidad
°  Vete a la vrg
°  Pasa pack Bot
°  Atencion grupo
°  Marica quien
°  Murio el grupo
°  Oh me vengo
°  Viernes
°  Baneado
°  Sexo
°  Hola
°  Un pato
°  Nyanpasu
°  Te amo
°  Yamete
°  Bañate
°  Es puto
°  La biblia
°  Onichan
°  Bot puto
°  Siuuu
°  Rawr
°  UwU
°  :c
°  a

「 THE DARK KING 」`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
module.exports = handler

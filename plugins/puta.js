let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que desee calcular su porcentaje de ${command.replace('how', '')}*`
conn.reply(m.chat, `
_*${text}* *es* *${Math.floor(Math.random() * 2000)}%* *${command.replace('how', '').toUpperCase()}.* *Alguien quire sus servicios? xd*_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid }} : {})}
handler.command = /^(puta)/i
handler.fail = null
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

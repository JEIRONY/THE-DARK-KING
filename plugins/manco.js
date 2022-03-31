let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que desee calcular su porcentaje de ${command.replace('how', '')}*`
conn.reply(m.chat, `
_*${text}* *es* *${Math.floor(Math.random() * 500)}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid}} : {})}
handler.command = /^(manco|manca)/i
handler.fail = null
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
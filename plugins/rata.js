let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Quien es *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
_*${text}* *es* *${Math.floor(Math.random() * 500)}%* *🐁 ${command.replace('how', '').toUpperCase()} come queso 🧀*_
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'lesbi'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang']
handler.command = /^(rata)/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

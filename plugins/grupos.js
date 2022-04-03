let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*HOLA SOY THE DARK KING AQUI TIENES MIS GRUPOS DE AYUDA*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/El6hMgOd2SJ3v4LHXjON0l

`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE DARK KING - BOT 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler

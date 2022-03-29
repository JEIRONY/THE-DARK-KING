function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '573152139466', 'JEIRONY - Creador - Oficial 1', m)
this.sendContact(m.chat, '48459070337', 'JEIRONY- Creador - NUNEROS DE AYUDA ', m)
this.sendContact(m.chat, '48699530441', 'JEIRONY - Creador - NUNEROS DE AYUDA ', m)
this.sendContact(m.chat, '48699520550', 'JEIRONY - Creador - NUNEROS DE AYUDA ', m)
this.sendContact(m.chat, '79266513672', 'JEIRONY - Creador - NUNEROS DE AYUDA ', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler

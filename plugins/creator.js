function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '573152139466', 'JEIRONY - Numero oficial 1', m)
this.sendContact(m.chat, '17094007365', 'JEIRONY  - Numero oficial 2', m)
this.sendContact(m.chat, '17094012432', 'JEIRONY  - Numero oficial 3', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler


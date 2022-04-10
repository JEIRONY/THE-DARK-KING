let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 CHISTE 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 THE DARK KING 」─*`, m)
}
handler.help = ['chiste']

handler.command = /^(chiste)$/i
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.chiste = [
"¿Que le dice un fideo a otro fideo?    mi cuerpo pide salsa xd  RIASE BOBO HIJUEPUTA",
"¿Que seria mexico sin tacos?   pues un pais destacado      RIASE BOBO HIJUEPUTA "


] 

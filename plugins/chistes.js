let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 VERDAD 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 THE DARK KING 」─*`, m)
}
handler.help = ['chiste']
handler.tags = ['General']
handler.command = /^(chiste)$/i
handler.rowner = true

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"¿Que le dice un fideo a otro fideo?    mi cuerpo pide salsa xd  RIASE BOBO HIJUEPUTA",
  "¿Que seria mexico sin tacos?   pues un pais destacado      RIASE BOBO HIJUEPUTA ",


] 

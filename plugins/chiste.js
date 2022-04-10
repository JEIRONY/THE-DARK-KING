let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`「 CHISTE 」\n\n*“${pickRandom(global.chiste)}”*\n\n「 THE DARK KING 」\n \n RIASE BOBO HIJUEPUTA POR ESO NO TIENE NOVI@`, m)
}
handler.help = ['chiste']

handler.command = /^(chiste|chistes)$/i
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.chiste = [
"¿Que le dice un fideo a otro fideo?    mi cuerpo pide salsa ",
"¿Que seria mexico sin tacos?   pues un pais destacado  ",
"¿Que le dijo un globo a otro globo en un desierto?    ¡CUIDADO CON EL CACTUSSSSSSSSSS!",
 "¿Que le dice un huevo riendose al otro ?        AJAJA CALLATE QUE ME PARTO DE RIIISA",
"¿Qué le dice un jardinero a otro?            Disfrutemos mientras podamos",
 "¿Como se le dice a un perro salchicha mientras esta tomando el sol?               Un perro caliente "
  
] 

let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Incluso el más fuerte de los oponentes tiene siempre una debilidad*', '©THE DARK KING', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(itachi)$/i

handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
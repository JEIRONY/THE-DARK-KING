let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hatsune Miku*', '©THE DARK KING', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(micu|miku)$/i

handler.fail = null
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler

//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
 *JEIRONY*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
 *𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
 *Creador del Bot: JEIRONY* 
 *Numero del creador:* *wa.me/573152139466 (No Bot)*
 *PayPal:* *https://www.paypal.me/serviciosjava*
 Si eres de colombia puedes hacerlo por Nequi, mas informacion aqui --> https://wa.link/g2376k
 *Numero del Bot oficial:* *wa.me/48699559203*
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *MENU*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}sc
┣ ${usedPrefix}donar
┣ ${usedPrefix}infobot
┣ ${usedPrefix}grupos
┣ ${usedPrefix}menuaudios
┣ ${usedPrefix}estado
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<UNE UN BOT A TU GRUPO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}join *link del grupo*
┣ ${usedPrefix}bots
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<NUMERO DEL CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}owner
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<JUEGOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}math *modo*
┣ ${usedPrefix}ttt *nombre del la sala*
┣ ${usedPrefix}delttt *nombre del la sala*
┣ ${usedPrefix}ppt *piedra / papel / tijera*
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<DESCARGAS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}imagen *texto*
┣ ${usedPrefix}ytsearch *texto*
┣ ${usedPrefix}dlaudio *link yt*
┣ ${usedPrefix}dlvid *link yt*
┣ ${usedPrefix}ytmp3 *link yt*
┣ ${usedPrefix}ytmp4 *link yt*
┣ ${usedPrefix}ytmp4.2 *link yt*
┣ ${usedPrefix}play *titulo del audio*
┣ ${usedPrefix}play2 *titulo del video*
┣ ${usedPrefix}play3 *titulo del audio/video*
┣ ${usedPrefix}play4 *titulo del video*
┣ ${usedPrefix}letra *nombredelacanción*
┣ ${usedPrefix}pinterestvideo *link de pinterest*
┣ ${usedPrefix}tiktokaudio *link del tiktok*
┣ ${usedPrefix}tiktok *link*
┣ ${usedPrefix}spotify *autor, cancion*
┣ ${usedPrefix}acortar *link*
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<GESTION DE GRUPOS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣  ${usedPrefix}admins *texto* 
┣  ${usedPrefix}añadir *numero* 
┣  ${usedPrefix}sacar @tag
┣  ${usedPrefix}save *@tag + nombre de contacto*
┣  ${usedPrefix}daradmin *@tag*
┣  ${usedPrefix}quitaradmin *@tag*
┣  ${usedPrefix}grupo *abrir / cerrar*
┣  ${usedPrefix}enable welcome
┣  ${usedPrefix}disable welcome
┣  ${usedPrefix}enable antilink
┣  ${usedPrefix}disable antilink
┣  ${usedPrefix}enable antilink2
┣  ${usedPrefix}disable antilink2
┣  ${usedPrefix}enable delete
┣  ${usedPrefix}disable  delete
┣  ${usedPrefix}link
┣  ${usedPrefix}notificar *texto*
┣  ${usedPrefix}setname *Nuevo nombre del grupo*
┣  ${usedPrefix}setdesc *Nueva descripción del grupo*
┣  ${usedPrefix}infogrupo
┣  ${usedPrefix}invocar *texto*
┣  ${usedPrefix}del *responder a un mensaje del bot*
┣  ${usedPrefix}fantasmas
┣  ${usedPrefix}banchat
┣  ${usedPrefix}unbanchat
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<CREADORES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}s
┣ ${usedPrefix}sticker
┣ ${usedPrefix}attp *texto*
┣ ${usedPrefix}style *texto*
┣ ${usedPrefix}attp2 *texto*
┣ ${usedPrefix}stickerfilter
┣ ${usedPrefix}gif *responde a un sticker/video*
┣ ${usedPrefix}subirestado *texto / responder video, imagen o gif*
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<AUDIOS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}menuaudios
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<CONVIERTETE EN BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}stop
┣ ${usedPrefix}jadibot
┣ ${usedPrefix}getcode
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<PROPIETARO DEL BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}boost
┣ ${usedPrefix}restart
┣ ${usedPrefix}banlist
┣ ${usedPrefix}binario1
┣ ${usedPrefix}binario2
┣ ${usedPrefix}banchat2
┣ ${usedPrefix}actualizar
┣ ${usedPrefix}CajaFuerte
┣ ${usedPrefix}unbanchat2
┣ ${usedPrefix}bc *texto*
┣ ${usedPrefix}deletechat
┣ ${usedPrefix}mutechat
┣ ${usedPrefix}bcgc *texto*
┣ ${usedPrefix}bcbot *texto*
┣ ${usedPrefix}mutechat *all*
┣ ${usedPrefix}setbye *@tag*
┣ ${usedPrefix}banuser *@tag*
┣ ${usedPrefix}deletechat *all*
┣ ${usedPrefix}mutechat *chat*
┣ ${usedPrefix}mutechat *group*
┣ ${usedPrefix}enable *public*
┣ ${usedPrefix}disable *public*
┣ ${usedPrefix}deletechat *chat*
┣ ${usedPrefix}deletechat *group*
┣ ${usedPrefix}unbanuser *@tag*
┣ ${usedPrefix}listgroup *@tag*
┣ ${usedPrefix}enable *restrict*
┣ ${usedPrefix}enable *autoread*
┣ ${usedPrefix}setwelcome *@tag*
┣ ${usedPrefix}enable *autoread*
┣ ${usedPrefix}disable *autoread*
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©JEISON  - Bot', '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler

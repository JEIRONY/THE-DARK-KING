let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink2 && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*OH QUE PENA PUTO👋, ${await this.getName(m.sender)} rompiste las reglas serás exterminado....!!*`)
    if (isAdmin) return m.reply('*𝑨𝑨 𝑷𝑼𝑻𝑶 𝑻𝑬 𝑺𝑨𝑳𝑽𝑨𝑺𝑻𝑬 𝑷𝑶𝑹 𝑺𝑬𝑹 𝑨𝑫𝑴𝑰𝑵(𝑨𝑳𝑮𝑼𝑵 𝑫𝑰𝑨 𝑻𝑬 𝑺𝑨𝑪𝑨𝑹𝑬)*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*PUTO*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler

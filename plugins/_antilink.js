let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*ADIOS RATA. ${await this.getName(m.sender)} POR PUTO Y POR MANDAR LINKS ....!!*`)
    if (isAdmin) return m.reply('*Ah cagon sos retrol he? te salvas por ser admin puto*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*JA JA JA -_- Don comedias te dicen eh?*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler

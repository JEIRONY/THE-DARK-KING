let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink2 && isGroupLink) {
    await m.reply(`*ใ ANTI LINKS ใ*\n*OH QUE PENA PUTO๐, ${await this.getName(m.sender)} rompiste las reglas serรกs exterminado....!!*`)
    if (isAdmin) return m.reply('*๐จ๐จ ๐ท๐ผ๐ป๐ถ ๐ป๐ฌ ๐บ๐จ๐ณ๐ฝ๐จ๐บ๐ป๐ฌ ๐ท๐ถ๐น ๐บ๐ฌ๐น ๐จ๐ซ๐ด๐ฐ๐ต(๐จ๐ณ๐ฎ๐ผ๐ต ๐ซ๐ฐ๐จ ๐ป๐ฌ ๐บ๐จ๐ช๐จ๐น๐ฌ)*')
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

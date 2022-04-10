export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //global.db.data.users[m.sender].banned = true
                m.reply('TE VOY A SACAR CONCHA TU MADRE!!')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
   await m.reply(`*「 ANTI LINKS 」*\n*ADIOS RATA. ${await this.getName(m.sender)} POR PUTO Y POR MANDAR LINKS ....!!*`)
    if (isAdmin) return m.reply('*Ah cagon sos retrol he? te salvas por ser admin puto*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
    
     await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler

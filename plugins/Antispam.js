let handler = m => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 50) {
            if (this.spam[m.sender].count > 10) {
                //global.DATABASE._data.users[m.sender].banned = true
                m.reply('*No hagas Spam!!*')
                 await m.reply(`*「 ANTI LINKS 」*\n*ADIOS RATA. ${await this.getName(m.sender)} POR PUTO Y POR MANDAR SPAM ....!!*`)
    if (isAdmin) return m.reply('*Ah cagon sos retrol he? te salvas por ser admin puto*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
  await this.groupRemove(m.chat, [m.sender])
    return true

}

module.exports = handler 

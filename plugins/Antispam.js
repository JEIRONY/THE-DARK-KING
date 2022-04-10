export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
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

    
     await this.groupRemove(m.chat, [m.sender])
  return true
module.exports = handler

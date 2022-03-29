let handler = async (m, { conn, participants, groupMetadata, args }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/admins.jpg'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        //let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let pesan = args.join` `
        let oi = `*Mensaje:* ${pesan}`
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `
━「 『 💖 』 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑𝐄𝐒 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐂𝐔𝐌𝐏𝐋𝐀𝐍 𝐄𝐒𝐓𝐀 𝐏𝐄𝐓𝐈𝐂𝐈Ó𝐍 『 💖 』 :」━

${oi}
${listAdmin}

*[ ⚠ ️] Solo usar este comando cuando se trate de una emergencia y sera utilizado por el owner y los administradores*
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.command = /^(admins|@admins)$/i

handler.group = true

module.exports = handler

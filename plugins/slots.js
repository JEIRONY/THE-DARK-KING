let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => { 
    conn.slots = conn.slots ? conn.slots : {}
    if (m.chat in conn.slots) return m.reply('TodavΓ­a hay gente jugando tragamonedas aquΓ­, espera hasta que termine!!')
    else conn.slots[m.chat] = true
    try { 
        if (args.length < 1) return m.reply(`Formato de uso *${usedPrefix}${command} [Cantidad]*
Ejemplo *${usedPrefix}${command} 999*`)
        let count = (typeof args[0] == 'number' ? Math.round(Math.max(args[0], 1)) : 1)
        let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
        let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
        let spin1 = (_spin1 * 1)
        let spin2 = (_spin2 * 1)
        let spin3 = (_spin3 * 1)
        let spin4 = (_spin4 * 1)
        let spin5 = (_spin5 * 1)
        let spin6 = (_spin6 * 1)
        let spin7 = (_spin7 * 1)
        let spin8 = (_spin8 * 1)
        let spin9 = (_spin9 * 1)
        let spins1 = (spin1 == 1 ? 'π' : spin1 == 2 ? 'π' : spin1 == 3 ? 'π' : spin1 == 4 ? 'π' : spin1 == 5 ? 'π' : '')
        let spins2 = (spin2 == 1 ? 'π' : spin2 == 2 ? 'π' : spin2 == 3 ? 'π' : spin2 == 4 ? 'π' : spin2 == 5 ? 'π' : '')
        let spins3 = (spin3 == 1 ? 'π' : spin3 == 2 ? 'π' : spin3 == 3 ? 'π' : spin3 == 4 ? 'π' : spin3 == 5 ? 'π' : '')
        let spins4 = (spin4 == 1 ? 'π' : spin4 == 2 ? 'π' : spin4 == 3 ? 'π' : spin4 == 4 ? 'π' : spin4 == 5 ? 'π' : '')
        let spins5 = (spin5 == 1 ? 'π' : spin5 == 2 ? 'π' : spin5 == 3 ? 'π' : spin5 == 4 ? 'π' : spin5 == 5 ? 'π' : '')
        let spins6 = (spin6 == 1 ? 'π' : spin6 == 2 ? 'π' : spin6 == 3 ? 'π' : spin6 == 4 ? 'π' : spin6 == 5 ? 'π' : '')
        let spins7 = (spin7 == 1 ? 'π' : spin7 == 2 ? 'π' : spin7 == 3 ? 'π' : spin7 == 4 ? 'π' : spin7 == 5 ? 'π' : '')
        let spins8 = (spin8 == 1 ? 'π' : spin8 == 2 ? 'π' : spin8 == 3 ? 'π' : spin8 == 4 ? 'π' : spin8 == 5 ? 'π' : '')
        let spins9 = (spin9 == 1 ? 'π' : spin9 == 2 ? 'π' : spin9 == 3 ? 'π' : spin9 == 4 ? 'π' : spin9 == 5 ? 'π' : '' )
        let user = global.DATABASE._data.users[m.sender]
        user.money -= count * 1
        for (let i = 0; i < 3; i++) {
            m.reply(`
            *π°VIRTUAL SLOTSπ°*
            
${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])}
${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])} <<==
${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])}|${pickRandom(['π', 'π', 'π', 'π', 'π'])}
            
            `.trim())
        }
        let WinOrLose, Hadiah
        if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
            WinOrLose = 'GRAN BOTE'
            Hadiah = `+${count * 4}`
            user.money += count * 4
        } else if (spin4 == spin5 && spin5  == spin6) {
           WinOrLose = 'BOTE' 
           Hadiah = `+${count * 2}`
           user.money += count * 2
        } else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {  
            Hadiah = `-${count * 1}`
            WinOrLose = 'UN POCO MΓS!!'
        } else {
             Hadiah = `-${count * 1}`
             WinOrLose = 'TΓ PIERDES'
        } 
        conn.reply(m.chat, `
       *π°VIRTUAL SLOTSπ°*

${spins1}|${spins2}|${spins3}
${spins4}|${spins5}|${spins6} <<==
${spins7}|${spins8}|${spins9}

*${WinOrLose}* *${Hadiah}*
`.trim(), m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Menu.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.slots[m.chat]
    }
}
handler.help = ['slots', 'jackpot']
handler.tags = ['General']
handler.command = /^slots?|jac?kpot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

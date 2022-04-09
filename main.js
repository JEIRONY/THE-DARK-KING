require('./config.js') 
let { WAConnection: _WAConnection } = require('@adiwajshing/baileys')
let { generate } = require('qrcode-terminal')
let syntaxerror = require('syntax-error')
let simple = require('./lib/simple')
//  let logs = require('./lib/logs')
let { promisify } = require('util')
let yargs = require('yargs/yargs')
let Readline = require('readline')
let cp = require('child_process')
let path = require('path')
let fs = require('fs')

let rl = Readline.createInterface(process.stdin, process.stdout) 
let WAConnection = simple.WAConnection(_WAConnection)

//global.owner = Object.keys(global.Owner)
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}
// global.LOGGER = logs()
const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.*aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.DATABASE = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
if (!global.DATABASE.data.users) global.DATABASE.data = {
  users: {},
  chats: {},
  stats: {},
  msgs: {},
  sticker: {},
}
if (!global.DATABASE.data.chats) global.DATABASE.data.chats = {}
if (!global.DATABASE.data.stats) global.DATABASE.data.stats = {}
if (!global.DATABASE.data.msgs) global.DATABASE.data.msgs = {}
if (!global.DATABASE.data.sticker) global.DATABASE.data.sticker = {}
global.conn = new WAConnection()
conn.browserDescription = ['GataBot por Gata Dios', '3.0']
let authFile = `${opts._[0] || 'session'}.data.json`
if (fs.existsSync(authFile)) conn.loadAuthInfo(authFile)
if (opts['trace']) conn.logger.level = 'trace'
if (opts['debug']) conn.logger.level = 'debug'
if (opts['big-qr'] || opts['server']) conn.on('qr', qr => generate(qr, { small: false }))
let lastJSON = JSON.stringify(global.DATABASE.data)
if (!opts['test']) setInterval(() => {
  conn.logger.info('Guardando database...')
  if (JSON.stringify(global.DATABASE.data) == lastJSON) conn.logger.info('Database actualizada!!')
  else {
    global.DATABASE.save()
    conn.logger.info('Database guardada!!')
    lastJSON = JSON.stringify(global.DATABASE.data)
  }
}, 1800 * 1000) // Autoguardado realizandose cada 30 minutos
if (opts['server']) require('./server')(global.conn, PORT)

conn.version = [2, 2143, 3]
conn.connectOptions.maxQueryResponseTime = 60_000
if (opts['test']) {
  conn.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  conn.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype || '',
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  conn.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await conn.prepareMessageContent(content, type, opts)
    let waMessage = await conn.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(16).toString('hex').toUpperCase()
    conn.emit('chat-update', {
      jid: conn.user.jid,
      hasNewMessage: true,
      count: 1,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => conn.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    global.DATABASE.save()
    process.send(line.trim())
  })
  conn.connect().then(() => {
    fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.connect = new Date
  })
}
process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    conn.off('chat-update', conn.handler)
    conn.off('message-delete', conn.onDelete)
    conn.off('group-participants-update', conn.onParticipantsUpdate)
    conn.off('CB:action,,call', conn.onCall)
  }
  conn.welcome = '╔═.✰.══════════╗\n𝑨𝑪𝑨𝑩𝑨 𝑫𝑬 𝑬𝑵𝑻𝑹𝑨𝑹 𝑬𝑳 𝑷𝑨𝑵𝑨 @user\n╚══════════.✰.═╝\n◈═════════◈═════════◈\n 𝑸𝑼𝑬 𝑶𝑵𝑫𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨 @subject ◈═════════◈═════════◈\n ╭══════⚘══════╮ \n𝑹𝑬𝑪𝑼𝑬𝑹𝑫𝑨 𝑳𝑬𝑬𝑹 𝑳𝑨𝑺 𝑹𝑬𝑮𝑳𝑨𝑺 𝑫𝑬𝑳 𝑮𝑹𝑼𝑷𝑶 \n@desc\n╰═════════════╯\n ⇩⇩⇩⇩⇩⇩⇩⇩\n ESCRIBE #MENU'
  conn.bye = '————————》𝑨𝑫𝑰𝑶𝑺  @user《—————————\n————————》𝑸𝑼𝑬 𝑻𝑬 𝑽𝑨𝒀𝑨 𝑩𝑰𝑬𝑵 𝑬𝑵 𝑻𝑼 𝑽𝑰𝑫𝑨,𝑬𝑺𝑷𝑬𝑹𝑶 𝑽𝑶𝑳𝑽𝑬𝑹𝑻𝑬 𝑨 𝑽𝑬𝑹《—————————'
  conn.spromote = '*@user ¡𝑸𝑼𝑬 𝑨𝑳𝑬𝑮𝑹𝑰𝑨𝑨𝑨𝑨𝑨 𝒀𝑨 𝑬𝑹𝑬𝑺 𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹!, 𝑹𝑬𝑪𝑼𝑬𝑹𝑫𝑨 𝑹𝑬𝑺𝑷𝑬𝑻𝑨𝑹 𝑨 𝑻𝑶𝑫𝑶𝑺'
  conn.sdemote = '@user 𝑳𝑶 𝑺𝑰𝑬𝑵𝑻𝑶 𝑨𝑴𝑰𝑮𝑶 𝑴𝑰𝑶 𝑽𝑬𝑶 𝑸𝑼𝑬 𝑺𝑬 𝑻𝑬 𝑯𝑨 𝑩𝑨𝑱𝑨𝑫𝑶 𝑫𝑬 𝑹𝑨𝑵𝑮𝑶, 𝑨𝑯𝑶𝑹𝑨 𝑬𝑹𝑬𝑺 𝑼𝑵 𝑴𝑰𝑬𝑴𝑩𝑹𝑶 𝑪𝑶𝑴𝑼𝑵 𝑴𝑨𝑺'
  conn.sDesc = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* @desc'
  conn.sSubject = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴:* @subject'
  conn.sIcon = '*𝚂𝙴 𝙷𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*'
  conn.sRevoke = '*𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*\n*𝙻𝙸𝙽𝙺 𝙽𝚄𝙴𝚅𝙾:* @revoke'
    conn.handler = handler.handler
  conn.onDelete = handler.delete
  conn.onParticipantsUpdate = handler.participantsUpdate
  conn.onCall = handler.onCall
  conn.on('chat-update', conn.handler)
  conn.on('message-delete', conn.onDelete)
  conn.on('group-participants-update', conn.onParticipantsUpdate)
  conn.on('CB:action,,call', conn.onCall)
  if (isInit) {
    conn.on('error', conn.logger.error)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state === 'close') {
            if (fs.existsSync(authFile)) await conn.loadAuthInfo(authFile)
            await conn.connect()
            fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.connect = new Date
          }
        } catch (e) {
          conn.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}

// Plugin Loader
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), fs.existsSync(dir) ? filename : 'Execution Function')
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()
process.on('exit', () => global.DATABASE.save())



// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)

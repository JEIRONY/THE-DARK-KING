let handler = async m => m.reply(`
🅹🅴🅸🆁🅾🅽🆈 
*VIDEO TUTORIAL: Proximamente en https://www.youtube.com/channel/UCN9wxOL23R-6hA2XgupyWZQ* 
💥 𝐑𝐄𝐐𝐔𝐈𝐒𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)
💥 INFO EXTRA 💥
➤ Mi PayPal :  https://www.paypal.me/serviciosjava

 🅹🅴🅸🆁🅾🅽🆈 
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler

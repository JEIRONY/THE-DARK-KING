let handler = async m => m.reply(`
πΉπ΄πΈππΎπ½π 
*VIDEO TUTORIAL: Proximamente en https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg* 
π₯ ππππππππππ ππππ ππ πππππππππππ π₯
β€ Termux  
β€ 1 GB de memoria en el telΓ©fono
β€ Aconsejable un WhatsApp secundario
β€ Aconsejable un numero secundario
β€ 2 telΓ©fonos o un 1 telΓ©fono y una PC (es temporal - solo para escanear un cΓ³digo QR)
π₯ INFO EXTRA π₯
β€ Mi PayPal :  https://www.paypal.me/serviciosjava

 πΉπ΄πΈππΎπ½π 
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler

let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola mi pana que tal vas, oh veo que deseas donar 💙*
*┃ 👉🏻 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃*
*┃ -   BENEFICIARIO: JEIRONY BENAVIDES (SERVICIOS JAVA)* 
*┃ -   CONCEPTO: APOYO*  
*┃➤ PayPal: https://www.paypal.me/serviciosjava*
*┃➤ Si eres de colombia puedes hacerlo por Nequi, mas informacion aqui --> https://wa.link/g2376k*
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/+573152139466*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i
module.exports = handler

const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function () {
 console.log("ready on \n" + bot.guilds.size + "serevrs \nname of bot: " + bot.user.username)
})


bot.login('Your token')
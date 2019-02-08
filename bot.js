const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ok') {
    msg.reply('ko!!!!');
  }
});

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setThumbnail(member.user.avatarURL)
.addField("***شكرا الانضمامك الينا***" ,member.user.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setColor('RANDOM')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'chat-arabjoker')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.login('NTQzMjMxNjEwNTk4ODUwNTgw.Dz5jrg.tYqqbi40GJuZtp7F2-ASIx1ij2o');

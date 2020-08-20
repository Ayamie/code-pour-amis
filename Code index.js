const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";
client.on("ready", message => { 
    console.log('bot => ok') 
      client.user.setActivity('develeper mon bot', { type:'PLAYING'});

})


client.on("message", message => { 
if(message.content === `${prefix}ping`){ 
message.channel.send(`🏓 pong - ${client.ws.ping}`)
 } 
 
 if(message.content === `Hello`){ 
 message.channel.send('bonjour<a:valide:731232586411540552>'); 
 
 } 
 
 if(message.content === `!help`){ 
 var help = '!ping => pong !' 
             '!hello => bonjour!' 
              'studio => la music' 
              
 message.channel.send(help) 
 
 } 
 
 if(message.content === `tg`){ 
 message.channel.send('merci de ne pas insulter '); 
 
 } 
 
 if(message.content === `Fdp`){ 
 message.channel.send('ta mère la pute tu arrête <a:ban:736946398490001408>'); 
 
 } 
 
 if(message.content === `giveaway nitro`){ 
 message.channel.send('1 invite = nitro classic <a:emoji_55:739952349937664131>!'); 
 
 } 
 
 if(message.content === `?support`){ 
 message.channel.send('voici le lien du serveur support: https://discord.gg/fFUDPuZ'); 
 
 } 
 
 if(message.content === `?stats`){ 
 message.channel.send('bonjour toi la commands est pas disponible<:mee6error:731153314497953813> !'); 
 
 } 
 
 if(message.content === `?help`){ 
 message.channel.send('!stats,music') 
 
 } 
 
 if (message.content === "?embed"){
 let embed = new Discord.MessageEmbed()
 .setTitle('Hello! :)')
 .setDescription("**moderations**")
 .addField( 'ban,kick,bantemporaire') 
 .setThumbnail('https://i.imgur.com/wSTFkRM.png').setImage('https://i.imgur.com/wSTFkRM.png')
 .setColor('#020202')
 .setFooter('jordan_offshl', 'https://cdn.discordapp.com/attachments/737388526848442459/742075728358539355/4713_ubot-1.png'); 
 message.channel.send(embed); 
 
 } 
 
 if(message.content === `?wl`){ 
 message.reply("vient d'avoir accès à tutoriel bot"); 
 
 } 
 
 if (message.content === `?ticket`){
 let embed = new Discord.MessageEmbed()
 .setTitle('') 
 .setDescription('hello welcome in the team!')
 .setImage('https://cdn.discordapp.com/attachments/714924113713561660/717739024478896198/8881444f23794650da1fe33c1bed39e0.gif');
 message.channel.send(embed); 
 
 } 
 
 if (message.content === `?mod`){
let embed = new Discord.MessageEmbed()
.setTitle('voici mes commands !help')
.setDescription('<===Invitation==>')
.addField('!invite')
.addField('**<===moderation==>**')
.setThumbnail('https://cdn.discordapp.com/attachments/719369502105665599/742137719198711858/1744840840.jpg')
.setImage('https://cdn.discordapp.com/attachments/719369502105665599/742136383329665044/c16009efd53f10bba79f19c683d53c3e.gif')
.setFooter('create by jordan'); 
message.channel.send(embed); 

} 

if(message.content === `?info`){
let embed = new Discord.MessageEmbed()
.setTitle('🔧inviteMaster info🔧')
.addField(	
{ name: 'ANTI BOT', value: '`on`', inline: true }, 
{ name: '\u200B', value: '\u200B' },	
{ name: 'ANTI RÔLE', value: '`on`', inline: true },	
{ name: 'ANTI MESSAGE BAN', value: '`on`', inline: true },	
{ name: 'ANTI MESSAGE KICK', value: '`on`', inline: true },
)
.setFooter('inviteMaster', 'https://cdn.discordapp.com/attachments/737388526848442459/742203444919533668/images_14.png'); 

message.channel.send(embed)

} 

async function play(voiceChannel) { 	 
const connection = await voiceChannel.join(); 
connection.play('audio.mp3'); 	 	

}
 	 
client.on('message', message => { 	
if (message.content === '?join') { 		 	
if (message.channel.type === 'dm') return; 		 	
const voiceChannel = message.member.voice.channel; 		 
if (!voiceChannel) { 			 	
return message.reply('please join a voice channel first!');		
} 		 	
voiceChannel.join().then(connection => { 			 	
const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' }); 			 
	const dispatcher = connection.play(stream); 			
	 	dispatcher.on('finish', () => voiceChannel.leave()); 	 	 	 
	 	 }); 	 		 		
	 	} 		
 }); 
 
 if(message.content === `?botInfo`){
 let embed = new Discord.MessageEmbed()
 .setTitle('')
 .setDescription('')
 .addFields(
     { name: '💾Serveur', value: '`97serveur`', inline: true }, 
     { name: '📏mon prefix', value: '`?`', inline: true }, 
     { name: '💻hebergeur', value: '`visual studio code`', inline: true }, 
     { name: '🆔️', value: '`743237817941098549`', inline: true }, 
     { name: '📡ping', value: '`98`', inline: true }, 
 )
 .setColor('RANDOM')
 .setFooter('by create jordan_offshl');
 
 message.channel.send(embed)
 
 }

if(message.content === `?help`){
let embed = new Discord.MessageEmbed()
.setTitle('help commands')
.setDescription('')
.addFields(
    { name: '<:emoji_1:745475906503704618>?pp', value: 'avatar', inline: true },
    { name: '<:emoji_1:745475906503704618>?clear', value: 'supprimer des message', inline: true },
    { name: '<:emoji_1:745475906503704618>?invite', value: 'cree des invite', inline: true },
    { name: '<:emoji_1:745475906503704618>?lvl', value: 'ton rank', inline: true },
 )
 .addFields(
     { name: '<:emoji_1:745475906503704618>?ban', value: 'explusé un membre', inline: true },
     { name: '<:emoji_1:745475906503704618>?kick', value: 'ban un membre', inline: true },
     { name: '<:emoji_1:745475906503704618>?hello', value: 'bonjour', inline: true },
     { name: '<:emoji_1:745475906503704618>?pp', value: 'avatar', inline: true },
  )
  .addFields(
      { name: '<:emoji_1:745475906503704618>?mute', value: 'mute un membre', inline: true },
      { name: '<:emoji_1:745475906503704618>?unmute', value: 'demute un personne mute pour spam ou autre raison', inline: true },
      { name: '<:emoji_1:745475906503704618>?unban', value: 'deban un membre qui a été ban pour un raison de votre choix', inline: true },
      { name: '<:emoji_1:745475906503704618>?config', value: 'configuration de langue de votre choix fr,en,etc', inline: true },
      { name: '<:emoji_1:745475906503704618>?say', value: 'dit des phrase ', inline: true },
    
  
  )
  .addFields(
      { name: '<:emoji_1:745475906503704618>music', value: 'le bot a une fonction de music pour lance la commands faite ?join pour que il rejoin la vocal', inline: true },
      { name: '<:emoji_1:745475906503704618>youtube', value: 'vous annonce les vidéo que jordan_offshl', inline: true },
      { name: '<:emoji_1:745475906503704618>', value: 'avatar', inline: true },
    
  
  )
.setColor('RANDOM')
.setFooter('help commands');
 
message.channel.send(embed)
 
} 

if(message.content === `?tutoriel`) {
    message.channel.send('@everyone aller voir la vidéo de jordan pour développer son bot sur mobile! https://youtu.be/DtePeQuJj3o ')
}

})
client.login('TOKEN');

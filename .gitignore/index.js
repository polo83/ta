const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('présent chef');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`${user.tag} a ete kick`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('mentionne la personne a kick');
    }
  }
});

client.login('NjAyOTEzMzg2NzIzOTM0MjE4.XTXxGw.vWyZReSo7GSAxc6N78nySdeoTiw');

client.on('message', message => {
  if (message.content === 'yo') {
    message.channel.send('salut comment va tu ?');
  }
});

client.on('message', message => {
  if (message.content === 'salut') {
    message.channel.send('salut comment va tu ?');
  }
});

client.on('message', message => {
  if (message.content === 're') {
    message.channel.send('re');
  }
});

client.on('message', message => {
  if (message.content === 'tu fait du gta 5 rp ?') {
    message.channel.send('oui Polo 83 fait du gta 5 rp');
  }
});

client.on('message', message => {
  if (message.content === 'que fait tu ?') {
    message.channel.send('je patiente pour que on me programme');
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Bienvenu sur le serveur SMICOU,${member}`);
});

client.on('message', message => {
  if (message.content === '${member}') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === '!meilleure jeux') {
    message.channel.send('merci beaucoup :star:  :star:  :star:  :star:  :star: ');
  }
});

client.on('message', message => {
  if (message.content === '!gg') {
    message.channel.send('merci :smile::smile:');
  }
});

client.on('message', message => {
  if (message.content === '!chaîne') {
    message.channel.send('les chaines youtube ma chaine:Polo 83, matt 83: matt 83,eltacos:eltacos');
  }
});

client.on('message', message => {
  if (message.content === 'Smicou') {
    message.channel.send(':joy: :joy:');
  }
});

client.on('message', message => {
  if (message.content === 'Polo 83') {
    message.channel.send('si tu as de la chance il va te répondre trés vite :joy:');
  }
});

client.on('message', message => {
  if (message.content === 'tfk') {
    message.channel.send('rien');
  }
});

client.on('message', message => {
  if (message.content === 'on à le droit au pub') {
    message.channel.send('non !');
  }
});

client.on('message', message => {
  if (message.content === 'on à le droit au pub ?') {
    message.channel.send('non !');
  }
});

client.on('message', message => {
  if (message.content === 'tfq') {
    message.channel.send('rien');
  }
});

client.on('message', message => {
  if (message.content === 'qui joue à fotnite ?') {
    message.channel.send('ici c pour jouer à SMICOU');
  }
});

client.on('message', message => {
  if (message.content === 'bot') {   
    message.channel.send('oui ?');
  }
});

client.on('message', message => {
  if (message.content === 'tkt') {
    message.channel.send(':ok::smile::ok::money_with_wings::money_with_wings::money_with_wings: ');
  }
});

client.on('message', message => {
  if (message.content === 'hahaha') {
    message.channel.send('lol');
  }
});

client.on('message', message => {
  if (message.content === 'mdrrr') {
    message.channel.send('ptdddrrrrrr');
  }
});

client.on('message', message => {
  if (message.content === 'france') {
    message.channel.send('Mr Chuckle Teth');
  }
});

client.on('message', message => {
  if (message.content === 'tres bien et toi ?') {
    message.channel.send('ca va super');
  }
});

client.on('message', message => {
  if (message.content === 'Tres bien et toi ?') {
    message.channel.send('ca va super');
  }
});

client.on('message', message => {
  if (message.content === 'bot') {
    message.channel.send('oui');
  }
});

client.on('message', message => {
  if (message.content === 'aurevoir') {
    message.channel.send('ciao');
  }
});

client.on('message', message => {
  if (message.content === 'gg') {
    message.channel.send('gg');
  }
});

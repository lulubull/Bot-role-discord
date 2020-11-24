const CommandoClient = require('./client');
const path = require('path');
const fs = require('fs')
const dotenv = require('dotenv');
const { ClientUser } = require('discord.js');

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

const client = new CommandoClient({
    commandPrefix: '?',
    owner: process.env.BOT_OWNER_ID,
    disableMentions: 'none'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['role_binder', 'Role_Binder'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial) {
		try {
			await reaction.message.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
		}
    }
    if (user.username != 'Role_binder') {
        let guild = reaction.message.guild
        let index_emoji = reaction.message.content.indexOf('👍')
        let role_name = reaction.message.content.slice(19,index_emoji-13)
        const role = guild.roles.cache
        .filter(role => role.name === role_name)
        .first();

        const member = guild.member(user);

        member.roles.add(role);

    }
});

client.on('messageReactionRemove', async (reaction, user) => {
	if (reaction.message.partial) {
		try {
			await reaction.message.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
		}
    }
    if (user.username != 'Role_binder') {
        let guild = reaction.message.guild
        let index_emoji = reaction.message.content.indexOf('👍')
        let role_name = reaction.message.content.slice(19,index_emoji-13)
        const role = guild.roles.cache
        .filter(role => role.name === role_name)
        .first();

        const member = guild.member(user);

        member.roles.remove(role);

    }
});

client.login(process.env.BOT_TOKEN);
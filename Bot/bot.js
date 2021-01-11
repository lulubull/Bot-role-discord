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
        let role_name = '';
        switch(reaction.emoji.name){
            case '🚙' :
                role_name = "Rocket League";
                break;
            case '✨' :
                role_name = "Stellaris";
                break;
            case '🧨' :
                role_name = "CS:GO";
                break;
            case '❄️' :
                role_name = "Project Winter";
                break;
            case '🧟‍♂️' :
                role_name = "Hunt : Showdown";
                break;
            case '👻' :
                role_name = "SCP: Secret Laboratory";
                break;
            case '🔫' :
                role_name = "VALORANT";
                break;
            case '🎨' :
                role_name = "Scribbl.io";
                break;
            case '🌩' :
                role_name = "HOTS";
                break;
            case '🏰' :
                role_name = "AoE III";
                break;
            case '🍀' :
                role_name = "TFT";
                break;
            case '🚶‍♂️' :
                role_name = "Garry's Mod";
                break;
            case '🎭' :
                role_name = "Among Us";
                break;
        }

        const member = guild.member(user);

        const role = guild.roles.cache
        .filter(role => role.name === role_name)
        .first();

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
        
        let role_name = '';
        switch(reaction.emoji.name){
            case '🚙' :
                role_name = "Rocket League";
                break;
            case '✨' :
                role_name = "Stellaris";
                break;
            case '🧨' :
                role_name = "CS:GO";
                break;
            case '❄️' :
                role_name = "Project Winter";
                break;
            case '🧟‍♂️' :
                role_name = "Hunt : Showdown";
                break;
            case '👻' :
                role_name = "SCP: Secret Laboratory";
                break;
            case '🔫' :
                role_name = "VALORANT";
                break;
            case '🎨' :
                role_name = "Scribbl.io";
                break;
            case '🌩' :
                role_name = "HOTS";
                break;
            case '🏰' :
                role_name = "AoE III";
                break;
            case '🍀' :
                role_name = "TFT";
                break;
            case '🚶‍♂️' :
                role_name = "Garry's Mod";
                break;
            case '🎭' :
                role_name = "Among Us";
                break;
        }

        const member = guild.member(user);
        
        const role = guild.roles.cache
        .filter(role => role.name === role_name)
        .first();

        member.roles.remove(role);

    }
});

client.login(process.env.BOT_TOKEN);
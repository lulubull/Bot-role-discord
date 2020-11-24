const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'summon',
			memberName: 'summon',
			group: 'role_binder',
            description: 'Summon the bot on an unique channel',
            clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
            userPermissions: ['ADMINISTRATOR'], // l'utilisateur doit être administrateur pour exécuter la commande
            guildOnly: true,
	        throttling: {
                usages: 2,
	            duration: 10,
	        },
        });
	}

	async run(msg) {
        const react = await msg.say(`Pour avoir le rôle Rocket League réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react.react("👍")
        const react1 = await msg.say(`Pour avoir le rôle Stellaris réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react1.react("👍")
        const react2 = await msg.say(`Pour avoir le rôle CS:GO réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react2.react("👍")
        const react3 = await msg.say(`Pour avoir le rôle Project Winter réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react3.react("👍")
        const react4 = await msg.say(`Pour avoir le rôle Hunt : Showdown réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react4.react("👍")
        const react12 = await msg.say(`Pour avoir le rôle SCP: Secret Laboratory réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react12.react("👍")
        const react5 = await msg.say(`Pour avoir le rôle VALORANT réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react5.react("👍")
        const react6 = await msg.say(`Pour avoir le rôle Scribbl.io réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react6.react("👍")
        const react7 = await msg.say(`Pour avoir le rôle HOTS réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react7.react("👍")
        const react8 = await msg.say(`Pour avoir le rôle AoE III réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react8.react("👍")
        const react9 = await msg.say(`Pour avoir le rôle TFT réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react9.react("👍")
        const react10 = await msg.say(`Pour avoir le rôle Garry’s Mod réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react10.react("👍")
        const react11 = await msg.say(`Pour avoir le rôle Among Us réagis avec 👍. Si tu ne veux plus le rôle enleve ta réaction`);
	    await react11.react("👍")

	}
};
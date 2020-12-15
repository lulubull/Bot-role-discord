const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

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
		const embed = new Discord.MessageEmbed(); // création de l'embed

		embed
			.setColor(`BLUE`)
			.setTitle(`Role Binder`)
			.setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`)
			.setDescription(`Bonjour,
				Ceci est un message de la plus haute importance.
				Veuillez réagire avec l'émoji associé au jeu voulu.

				Rocket League : 🚙
				Stellaris : ✨
				CS:GO : 🧨
				Project Winter : ❄️
				Hunt : Showdown : 🧟‍♂️
				SCP: Secret Laboratory : 👻
				VALORANT : 🔫
				Scribbl.io : 🎨
				HOTS : 🌩
				AoE III : 🏰
				TFT : 🍀
				Garry’s Mod : 🚶‍♂️
				Among Us : 🎭`)
		;
        const react = await msg.say(embed);
	    await react.react("🚙");
	    await react.react("✨");
	    await react.react("🧨");
	    await react.react("❄️");
	    await react.react("🧟‍♂️");
	    await react.react("👻");
	    await react.react("🔫");
	    await react.react("🎨");
	    await react.react("🌩");
	    await react.react("🏰");
	    await react.react("🍀");
	    await react.react("🚶‍♂️");
	    await react.react("🎭");

	}
};
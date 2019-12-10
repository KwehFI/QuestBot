import {getDiscordClient} from "./src/client/discordClient.js";
import {handleCommand} from "./src/message/commandHandler.js";
const cmdPrefix = "!";
enableDiscord();


function enableDiscord() {
    getDiscordClient().then((client) => {
        client.on("message", message => {
            if (!message.content.startsWith(cmdPrefix) || message.author.bot) {
                return;
            } else {
                const serverID = message.guild.id;
                const channelID = message.channel.id;
                const playerName = message.author.username;
                const playerID = message.author.id;
                const args = message.content.slice(cmdPrefix.length).split(' ');
                const command = args.shift().toLowerCase();
                handleCommand(serverID, channelID, playerName, playerID, command, args, "Discord");
            }
        })
    })
}
import {getDiscordClient} from "../client/discordClient.js";

function sendMessage(channelID, message, service) {
    if (service === "Discord") {
        getDiscordClient().then((client) => {
            client.channels.get(channelID).send(message);
        })
    }
}

export {
    sendMessage
}
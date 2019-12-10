import Discord from "discord.js";
import fs from "fs";
const token = JSON.parse(fs.readFileSync("./config/botConfig.json")).discord.token;
let client;

function getClient() {
    return new Promise((resolve, reject) => {
        if (typeof client === "undefined") {
            client = new Discord.Client();
        }

        if (client.status <= 2) {
            resolve(client);
        } else {
            return client.login(token)
            .then((token) => {
                resolve(client);
            })
        }
    })
}

export {
    getClient as getDiscordClient
}
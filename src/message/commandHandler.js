import fs from "fs";
const commandMap = new Map();

function handleCommand(serverID, channelID, playerName, playerID, command, args, service) {
    if (commandMap.size === 0) {
        loadCommandSet("Default").then(() => {
            if (commandMap.has(command)) {
                commandMap.get(command).execute(serverID, channelID, playerName, playerID, command, args, service);
            }
        })
    } else {
        if (commandMap.has(command)) {
            commandMap.get(command).execute(serverID, channelID, playerName, playerID, command, args, service);
        }
    }
}

async function loadCommandSet(commandSet) {
    let cmdPath = "./src/message/commands/" + commandSet + "/"
    let commandFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith(".js")).map(file => file.toLowerCase());
    for (const commandFile of commandFiles) {
        let command = new (await import("./commands/" + commandSet + "/" + commandFile)).default;
        commandMap.set(command.getName(), command);
    }
}

export {
    handleCommand
}
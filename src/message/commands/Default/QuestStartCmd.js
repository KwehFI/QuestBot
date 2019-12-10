import Command from "../Command.js";
import {isQuestRunning, startQuest} from "../../../quest/questHandler.js";
import {sendMessage} from "../../messageHandler.js";

export default class QuestStartCmd extends Command {

    constructor() {
        super("queststart");
    }

    execute(serverID, channelID, playerName, playerID, args, service) {
        if (isQuestRunning(serverID)) {
            const message = "A Quest is already running for this server.";
            console.log(channelID, message, service);
            sendMessage(channelID, message, service);
        } else {
            const message = "Placeholder, Started.";
            console.log(channelID, message, service);
            sendMessage(channelID, message, service);
            startQuest(serverID, channelID, service);
        }
1    }
}
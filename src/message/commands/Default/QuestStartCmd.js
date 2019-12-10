import Command from "../Command.js";
import {isQuestRunning, startQuest} from "../../../quest/questHandler.js";
import {sendMessage} from "../../messageHandler.js";

export default class QuestStartCmd extends Command {

    constructor() {
        super("queststart");
    }

    execute(serverID, channelID, playerName, playerID, command, args, service) {
        if (isQuestRunning(serverID)) {
            let message = "A Quest is already running for this server.";
            sendMessage(channelID, message, service);
        } else {
            startQuest(serverID, channelID, service);
        }
    }
}
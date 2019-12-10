import Command from "../Command.js";
import {isPlayerInQuest, addNewPlayerToQuest, isQuestRunning, getPlayerCount} from "../../../quest/questHandler.js";
import { sendMessage } from "../../messageHandler.js";

export default class QuestCmd extends Command {

    constructor() {
        super("quest");
    }

    execute(serverID, channelID, playerName, playerID, args, service) {
        if (isQuestRunning(serverID)) {
            if (!isPlayerInQuest(serverID, playerID)) {
                addNewPlayerToQuest(serverID, channelID, playerName, playerID, service)
                    .then(() => {
                        const playerCount = getPlayerCount(serverID);
                        const message = playerName + " has joined the Quest! Total Players: (" + playerCount + ")";
                        sendMessage(channelID, message, service);
                    })
            }
        } else {
            const message = "A Quest is not running for this server. Please type !queststart to begin one.";
            sendMessage(channelID, message, service);
        }
    }
}
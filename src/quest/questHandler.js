import Quest from "./Quest.js";
import Player from "./../player/Player.js";
import {getPlayer} from "../player/playerHandler.js";

const questMap = new Map();

function startQuest(serverID, channelID, service) {
    questMap.set(serverID, new Quest(serverID, channelID, service));
}

function isQuestRunning(serverID) {
    return questMap.has(serverID);
}

function getPlayerCount(serverID) {
    return questMap.get(serverID).getPlayerCount();
}

function isPlayerInQuest(serverID, playerID) {
    return questMap.get(serverID).isPlayerInQuest(playerID);
}

function addNewPlayerToQuest(serverID, channelID, playerName, playerID, service) {
    return getPlayer(serverID, channelID, playerName, playerID, service)
        .then((newPlayer) => {
            questMap.get(serverID).addPlayer(newPlayer);
        })
}

export {
    startQuest,
    isQuestRunning,
    getPlayerCount,
    addNewPlayerToQuest,
    isPlayerInQuest
};
import Quest from "./Quest.js";

const questMap = new Map();

function startQuest(serverID, channelID, service) {
    questMap.set(serverID, new Quest(serverID, channelID, service));
}

function isQuestRunning(serverID) {
    return questMap.has(serverID);
}

export {
    startQuest,
    isQuestRunning
};
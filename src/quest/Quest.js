export default class Quest {
    constructor(serverID, channelID, service) {
        this.serverID = serverID;
        this.channelID = channelID;
        this.service = service;
        this.players = new Map();
    };

    getPlayerCount() {
        return this.players.size;
    }

    addPlayer(player) {
        this.players.set(player.getPlayerID(), player);
    }

    isPlayerInQuest(playerID) {
        return this.players.has(playerID);
    }
}
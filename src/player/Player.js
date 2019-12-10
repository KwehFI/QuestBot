export default function Player(serverID, channelID, playerID, playerName, playerLevel, playerJob, playerEXP, playerGold, service) {
    this.serverID = serverID;
    this.channelID = channelID;
    this.playerID = playerID;
    this.playerName = playerName;
    this.playerLevel = playerLevel;
    this.playerJob = playerJob;
    this.playerEXP = playerEXP;
    this.playerGold = playerGold;
    this.service = service;
}

Player.prototype.getPlayerID = function() {
        return this.playerID;
}


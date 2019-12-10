import Player from "./Player.js";
import {isPlayerInDB, addPlayerToDB, getPlayerData} from "./data/playerDB.js";

function getPlayer(serverID, channelID, playerName, playerID, service) {
    const primaryKey = service + "_" + serverID + "-" + channelID;

    return isPlayerInDB(primaryKey)
        .then((result) => {
            if (result) {
                return getPlayerData(primaryKey)
                    .then((data) => {
                        return new Player(serverID, channelID, playerID, playerName, getPlayerLevel(data[0].playerEXP), data[0].playerJob, data[0].playerEXP, data[0].playerGold, service);
                    })
            } else {
                return addPlayerToDB(primaryKey, serverID, channelID, playerID, service)
                    .then(() => {
                        return getPlayerData(primaryKey)
                        .then((data) => {
                            return new Player(serverID, channelID, playerID, playerName, getPlayerLevel(data[0].playerEXP), data[0].playerJob, data[0].playerEXP, data[0].playerGold, service);
                        })
                    })
            }
        })

}

function getPlayerLevel(playerEXP) {
    return 1;
}

export {
    getPlayer
}
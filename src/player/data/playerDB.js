import fs from "fs";
import mariadb from "mariadb";

const dbCreds = JSON.parse(fs.readFileSync("./config/dbCreds.json"));
const pool = mariadb.createPool(dbCreds);

function executeQuery(query, values) {
    return pool.getConnection()
        .then((conn) => {
            return conn.query(query, values)
                .then((res) => {
                    conn.end();
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                    conn.end();
                })
        })
        .catch ((err) => {
            console.log(err);
            conn.end();
        })
}

function isPlayerInDB(primaryKey) {
    const query = "SELECT * FROM playerdata where id=?";
    return executeQuery(query, [primaryKey])
        .then((res) => {
            if (typeof res[0] === "undefined") {
                return false;     
            } else {
                return true;
            }
        })
}

function getPlayerData(primaryKey) {
    const query = "SELECT * FROM playerdata where id=?";
    return executeQuery(query, [primaryKey]);
}

function addPlayerToDB(primaryKey, serverID, channelID, playerID, service) {
    const query = "INSERT INTO playerdata value (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [primaryKey, serverID, channelID, playerID, "Default", 0, 500, service];
    return executeQuery(query, values);
}

export {
    getPlayerData,
    addPlayerToDB,
    isPlayerInDB
}

import Command from "../Command.js";

export default class QuestCmd extends Command {

    constructor() {
        super("quest");
    }

    execute() {
        console.log("test2");
    }
}
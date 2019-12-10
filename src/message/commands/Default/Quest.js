import Command from "../Command.js";

export default class QuestStart extends Command {

    constructor() {
        super("quest");
    }

    execute() {
        console.log("test2");
    }
}
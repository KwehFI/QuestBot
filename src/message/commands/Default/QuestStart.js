import Command from "../Command.js";

export default class QuestStart extends Command {

    constructor() {
        super("queststart");
    }

    execute() {
        console.log("test");
    }
}
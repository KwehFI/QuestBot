export default class Command {
    constructor(cmdName) {
        this.name = cmdName;
    }

    getName() {
        return this.name;
    }
}
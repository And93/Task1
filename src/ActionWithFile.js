const fs = require("fs");
const yargs = require("yargs");

const pathToFile = "./data/todoList.json";

class ActionWithFile {

    constructor() {
        this.title = yargs.argv.title;
        this.body = yargs.argv.body;
    };

    contentInFile() {
        return fs.readFileSync(pathToFile, "utf8");
    };

    parseredFile() {
        return JSON.parse(this.contentInFile());
    }

    writeToFile(content) {
        try {
            fs.writeFileSync(pathToFile, content, "utf8");
        } catch (err) {
            throw err;
        }
    };
}

module.exports = ActionWithFile;

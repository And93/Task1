const fs = require("fs");
const yargs = require("yargs").argv;

const pathToFile = "./data/todoList.json";

class ActionWithFile {

    constructor() {
        this.title = yargs.title;
        this.body = yargs.body;
    };

    readFile() {
        return this.errorHandler(fs.readFileSync(pathToFile, "utf8"));
    };

    // Parse json file to object
    parseredFile() {
        return JSON.parse(this.readFile());
    };

    writeToFile(content) {
        return this.errorHandler(fs.writeFileSync(pathToFile, content, "utf8"));
    };

    errorHandler(func) {
        try {
            return func;
        } catch (err) {
            throw err;
        }
    };
}

module.exports = ActionWithFile;

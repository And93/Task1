const fs = require("fs");
const yargs = require("yargs");

const pathToFile = "./data/todoList.json";

class ActionWithFile {

    constructor() {
        this.title = yargs.argv.title;
        this.body = yargs.argv.body;
    };

    contentInFile() {
        return this.errorHandler(fs.readFileSync(pathToFile, "utf8"));
    };

    parseredFile() {
        return JSON.parse(this.contentInFile());
    }

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

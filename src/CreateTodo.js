const fs = require("fs");
const yargs = require("yargs");

/**
 * If you want create todo, use please: node ./src/CreateTodo.js --title=${title} --body=${body}
 */

class CreateTodo {

    constructor() {
        this.title = yargs.argv.title;
        this.body = yargs.argv.body;
        this.createNewTodo();
    }

    createNewTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        } else if (typeof this.body === "undefined") {
            throw "Please set 'body'";
        }

        const pathToFile = "./data/todoList.json"
        const file = fs.readFileSync(pathToFile, "utf8");
        let obj = [];
        let json;

        if (file.includes(this.title)) {
            throw `Todo with name: '${this.title}' has already done`;
        }

        obj = JSON.parse(file);
        obj.push({title: this.title, body: this.body});
        json = JSON.stringify(obj);

        try {        
            fs.writeFileSync(pathToFile, json, "utf8");
        } catch (err) {
            throw err;
        };
    };
}

const createTodo = new CreateTodo();

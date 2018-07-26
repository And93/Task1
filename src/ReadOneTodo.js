const fs = require("fs");
const yargs = require("yargs");

/**
 * If you want find todo, use please: node ./src/ReadOneTodo.js --title=${title}
 */

class ReadOneTodo {

    constructor() {
        this.title = yargs.argv.title;
        this.readOneTodo();
    }

    readOneTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        };

        const pathToFile = "./data/todoList.json"
        const file = fs.readFileSync(pathToFile, "utf8");
        
        let obj = [];
        let isDoneSearch = false;

        obj = JSON.parse(file);


        for (const todo of obj) {
            for(const item in todo) {
                if (todo[item] === this.title) {
                    console.log("title:", todo["title"]);
                    console.log("body:", todo["body"]);
                    isDoneSearch = true;
                    break;
                }
            }
        }

        if (!isDoneSearch) {
            throw "No match found"
        }
    };
}

const readOneTodo = new ReadOneTodo();

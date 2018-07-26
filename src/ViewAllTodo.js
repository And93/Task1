const fs = require("fs");

/**
 * If you want look all todo, use please: npm run viewAllTodo
 */

class ViewAllTodo {

    constructor() {
        this.listOfAllTodo();
    }

    listOfAllTodo() {

        const pathToFile = "./data/todoList.json"
        const file = fs.readFileSync(pathToFile, "utf8");
        let obj = [];

        obj = JSON.parse(file);

        for(const todo of obj) {
            console.log("title:", todo["title"]);
            console.log("body:", todo["body"], "\n");
        }
    };
}

const viewAllTodo = new ViewAllTodo();

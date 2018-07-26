const ActionWithFile = require("./ActionWithFile");

/**
 * If you want look all todo, use please: npm run viewAllTodo
 */

class ViewAllTodo extends ActionWithFile {

    constructor() {
        super();
        this.listOfAllTodo();
    }

    listOfAllTodo() {
        for (const todo of this.parseredFile()) {
            console.log("title:", todo["title"]);
            console.log("body:", todo["body"], "\n");
        }
    };
}

const viewAllTodo = new ViewAllTodo();

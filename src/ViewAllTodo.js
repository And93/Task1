const ActionWithFile = require("./ActionWithFile");

/**
 * If you want to see everything to do, please use: npm run viewAllTodo
 */

class ListOfAllTodo extends ActionWithFile {

    viewAllTodo() {

        console.log(`Number of active todo is: ${this.parseredFile().length}`, "\n");

        if (this.parseredFile().length === 0) {
            throw "List of todo is empty. Please create your first todo.";
        }

        this.parseredFile().map(todo => {
            console.log("title:", todo["title"]);
            console.log("body:", todo["body"], "\n");
        });
    };
}

const listOfAllTodo = new ListOfAllTodo();

listOfAllTodo.viewAllTodo();

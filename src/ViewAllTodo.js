const ActionWithFile = require("./ActionWithFile");

/**
 * If you want to see everything to do, please use: npm run viewAllTodo
 */

class ListOfAllTodo extends ActionWithFile {

    viewAllTodo() {

        const numberOfTodo = this.parseredFile().length;

        if (numberOfTodo === 0) {
            throw "List of todo is empty. Please create your first todo.";
        }

        console.log(`Number of active todo is: ${numberOfTodo}`, "\n");

        this.parseredFile().map(todo => {
            console.log("title:", todo["title"]);
            console.log("body:", todo["body"], "\n");
        });
    };
}

const listOfAllTodo = new ListOfAllTodo();

listOfAllTodo.viewAllTodo();

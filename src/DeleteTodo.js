const ActionWithFile = require("./ActionWithFile");

/**
 * If you want delete todo, use please: npm run delete -- --title=${title}
 */

class DeleteTodo extends ActionWithFile {

    constructor() {
        super();
        this.deleteTodo();
    }

    deleteTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        }

        let isDoneDelete = false;
        let obj = this.parseredFile();

        for (const todo of obj) {
            for (const item in todo) {
                if (todo[item] === this.title) {
                    obj.splice(obj.indexOf(todo), 1);
                    this.writeToFile(JSON.stringify(obj));
                    isDoneDelete = true;
                    break;
                }
            }
        }

        if (!isDoneDelete) {
            throw "No match found"
        }
    };
}

const deleteTodo = new DeleteTodo();

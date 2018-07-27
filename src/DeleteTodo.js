const ActionWithFile = require("./ActionWithFile");

/**
 * If you want to delete todo, please use: npm run delete -- --title="title"
 */

class DeleteTodo extends ActionWithFile {

    constructor() {
        super();
        this.deleteTodo();
    }

    deleteTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'.";
        }

        let isDoneDelete = false;
        const obj = this.parseredFile();

        obj.map(todo => {
            for (const item in todo) {
                if (item === "title" && todo[item] === this.title) {
                    obj.splice(obj.indexOf(todo), 1);
                    this.writeToFile(JSON.stringify(obj));
                    isDoneDelete = true;
                    console.log(`The todo with title: '${this.title}' was successfully deleted.`, "\n");
                    break;
                }
            }
        });

        if (!isDoneDelete) {
            throw `Todo with title: '${this.title}' not found.`;
        }
    };
}

const deleteTodo = new DeleteTodo();

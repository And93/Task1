const ActionWithFile = require("./ActionWithFile");

/**
 * If you want create todo, use please: npm run create -- --title=${title} --body=${body}
 */

class CreateTodo extends ActionWithFile {

    constructor() {
        super();
        this.createNewTodo();
    }

    createNewTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        } else if (typeof this.body === "undefined") {
            throw "Please set 'body'";
        }

        if (this.contentInFile().includes(this.title)) {
            throw `Todo with name: '${this.title}' has already done`;
        }

        let obj = this.parseredFile();
        obj.push({title: this.title, body: this.body});
        this.writeToFile(JSON.stringify(obj))
    };
}

const createTodo = new CreateTodo();

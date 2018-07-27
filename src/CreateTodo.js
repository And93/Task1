const ActionWithFile = require("./ActionWithFile");

/**
 * If you want to create todo, please use: npm run create -- --title="title" --body="body"
 */

class CreateTodo extends ActionWithFile {

    constructor() {
        super();
        this.createNewTodo();
    }

    createNewTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'.";
        } else if (typeof this.body === "undefined") {
            throw "Please set 'body'.";
        }

        if (this.readFile().includes(this.title)) {
            throw `Todo with name: '${this.title}' has already done.`;
        }

        const obj = this.parseredFile();

        obj.push({title: this.title, body: this.body});
        this.writeToFile(JSON.stringify(obj));
        console.log(`The todo with title: '${this.title}' was successfully created.`, "\n");
    };
}

const createTodo = new CreateTodo();

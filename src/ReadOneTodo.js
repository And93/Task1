const ActionWithFile = require("./ActionWithFile");

/**
 * If you want to find todo, please use: npm run read -- --title="title"
 */

class ReadOneTodo extends ActionWithFile {

    constructor() {
        super();
        this.readOneTodo();
    }

    readOneTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'.";
        }

        const obj = this.parseredFile();
        let isDoneSearch = false;

        obj.map(todo => {
            for (const item in todo) {
                if (item === "title" && todo[item] === this.title) {
                    console.log("title:", todo["title"]);
                    console.log("body:", todo["body"], "\n");
                    isDoneSearch = true;
                    break;
                }
            }
        });

        if (!isDoneSearch) {
            throw `Todo with title: '${this.title}' not found.`;
        }
    };
}

const readOneTodo = new ReadOneTodo();

const ActionWithFile = require("./ActionWithFile");

/**
 * If you want find todo, use please: npm run read -- --title=${title}
 */

class ReadOneTodo extends ActionWithFile {

    constructor() {
        super();
        this.readOneTodo();
    }

    readOneTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        }

        const obj = this.parseredFile();
        let isDoneSearch = false;

        for (const todo of obj) {
            for (const item in todo) {
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

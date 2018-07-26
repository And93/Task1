const fs = require("fs");
const yargs = require("yargs");

/**
 * If you want delete todo, use please: node ./src/DeleteTodo.js --title=${title}
 */

class DeleteTodo {

    constructor() {
        this.title = yargs.argv.title;
        this.deleteTodo();
    }

    deleteTodo() {

        if (typeof this.title === "undefined") {
            throw "Please set 'title'";
        };

        const pathToFile = "./data/todoList.json"
        const file = fs.readFileSync(pathToFile, "utf8");
        
        let obj = [];
        let json;
        let isDoneDelete = false;

        obj = JSON.parse(file);


        for (const todo of obj) {
            for(const item in todo) {
                if (todo[item] === this.title) {
                    obj.splice(obj.indexOf(todo));
                    json = JSON.stringify(obj);

                    try {        
                        fs.writeFileSync(pathToFile, json, "utf8");
                    } catch (err) {
                        throw err;
                    };
                    
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
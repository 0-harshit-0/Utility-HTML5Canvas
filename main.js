import {CodeJar} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/codejar.min.js";
import {withLineNumbers} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/linenumbers.js";
import {Stack} from "./Assets/stack.js";
import {Vector2D} from "./Assets/vector.js";
import {Shapes} from "./Assets/shapes.js";

class Editor {
    constructor() {
        // initialize the code editor
        this.jar = new CodeJar(
            document.querySelector(".editor"), 
            withLineNumbers(Prism.highlightElement),
        );

        // this allows the user to run the code by pressing shift + enter
        this.shiftEnterDetector();

        // this allows the user to run the code by pressing any button that has the
        // whose id="run"
        document.querySelector("#run").addEventListener("click", this.executeCode(this.jar.toString()));
    }

    shiftEnterDetector() {
        // detects when shift and enter has been pressed 
        // and execute the code in the editor if detected
        let map = {};
        document.addEventListener('keydown', (KeyboardEvent) => {  
            map[KeyboardEvent.key] = true;
            if (map["Enter"] == true && map["Shift"] == true) {
                this.executeCode(this.jar.toString());
            }
        });
    
        document.addEventListener('keyup', (KeyboardEvent) => {
            map[KeyboardEvent.key] = false;        
        });
    }

    executeCode(codeString) {
        // this log is used to keep track of all the statements 
        let log = [];

        // this is required to run the prettifyLog() inside print()
        let prettifyLog = this.prettifyLog;

        // function to let the user print 
        let print = function(expression) {
            log.push(expression);
            document.querySelector(".console").innerText = prettifyLog(log);
        }

        let getContext = function() {
            return document.querySelector(".canvas").getContext('2d');
        }
        
        // This executes the users code
        try {
            eval(codeString);
        }
        catch(error) {
            temp.innerText = error;
        }
    }

    // takes an array and returns a string with a new line character
    // between each entry
    prettifyLog(log) {
        let str = "";

        log.forEach( (elt, index) => {
            str += elt;
            str += "\n";
        });
    return str;
    }
}

window.onload = function() {
    let editor = new Editor();
}

import {CodeJar} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/codejar.min.js";
import {withLineNumbers} from "https://cdn.jsdelivr.net/npm/codejar@3.1.0/linenumbers.js";
import {Stack} from "./Assets/stack.js";

class Editor {
    constructor(editorID, canvasID, consoleID) {
        this.editor = document.querySelector(".editor");
        this.canvas = document.querySelector("#canvas");
        this.console = document.querySelector("#console");
        // console.log(this.console);
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

    executeCode = function(codeString) {
        let log = [];

        let temp = this.console;
        // function to let the user print 
        let print = function(expression) {
            log.push(expression);
            console.log(temp);
            // this.console.innerText = log.toString();
        }
        console.log(this.console);
        eval(codeString);
    }
}

let main = function() {
    let editor = new Editor(1, 2, 3);
}

window.onload = function() {
    main();
}

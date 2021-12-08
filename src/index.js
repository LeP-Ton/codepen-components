import tips from "./tips/tips.js";
import hljs from "highlight.js";
import execute from "./example/execute1.0.5.js";


function main(){
    hljs.highlightAll();
    tips();
    execute();  
}
main()
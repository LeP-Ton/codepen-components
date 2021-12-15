import hljs from "highlight.js";
import Step from './list/step.js'
import Case from './list/case.js';
import ListBox from './list/listbox.js';
import Example from './example/example.js';

function main(){
    hljs.highlightAll();
    window.customElements.define('codepen-step', Step);
    window.customElements.define('codepen-case', Case);
    window.customElements.define('codepen-listbox', ListBox);
    window.customElements.define('codepen-example', Example);
}
main()
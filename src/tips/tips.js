import Step from './step.js'
import Case from './case.js';
import ListBox from './listbox.js';
export default function tips() {
    window.customElements.define('codepen-step', Step);
    window.customElements.define('codepen-case', Case);
    window.customElements.define('codepen-listbox', ListBox);
}
import Step  from './step.js'
import Case from './case.js';
export default function tips(){
    window.customElements.define('codepen-step', Step);
    window.customElements.define('codepen-case', Case);
}
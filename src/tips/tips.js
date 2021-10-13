import Step  from './step.js'
import Case from './case.js';
// require('./tips.css');
export default function tips(){
    window.customElements.define('codepen-step', Step);
    window.customElements.define('codepen-case', Case);
    // const url="tips.css"
    // document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${url}>`;
}
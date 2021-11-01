// import Step  from './tips/step.js'
// import Case from './tips/case.js';
// window.customElements.define('codepen-step', Step);
// window.customElements.define('codepen-case', Case);
import tips from './tips/tips.js';
import 'highlight.js/styles/codepen-embed.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

tips();
hljs.registerLanguage('javascript', javascript);
hljs.highlightAll();
const template = document.createElement("template");

template.innerHTML = `
    <style>
    pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#222;color:#fff}.hljs-comment,.hljs-quote{color:#777}.hljs-built_in,.hljs-bullet,.hljs-deletion,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-regexp,.hljs-symbol,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ab875d}.hljs-attribute,.hljs-name,.hljs-section,.hljs-selector-class,.hljs-selector-id,.hljs-title,.hljs-type{color:#9b869b}.hljs-addition,.hljs-keyword,.hljs-selector-tag,.hljs-string{color:#8f9c6c}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}
    step {
      display: block;
      margin: 0 50px;
      border-bottom: 1px solid;
    }
    step::before {
      display: block;
      margin-top: 20px;
      font-size: 20px;
      content: attr(stepPrefix) attr(stepIndex) attr(stepSuffix) attr(text);
    }
    step:last-child {
      border-bottom: none;
    }
    </style>
    <step></step>
`;

export default class Step extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$step = this._shadowRoot.querySelector("step");
    this.stepNodeList = this.parentNode.getElementsByTagName("codepen-step");
    this.indexShow==="true"||this.indexShow===null?this.stepIndex = Array.prototype.slice.call(this.stepNodeList).indexOf(this) + 1:this.stepIndex='';
  }
  get text() {
    return this.getAttribute("text");
  }
  set text(value) {
    this.setAttribute("text", value);
  }
  get stepPrefix(){
    return this.getAttribute("stepPrefix");
  }
  set stepPrefix(value){
    this.setAttribute("stepPrefix",value);
  }
  get indexShow(){
    return this.getAttribute("indexShow");
  }
  set indexShow(value){
    this.setAttribute("indexShow",value);
  }
  get stepSuffix(){
    return this.getAttribute("stepSuffix")
  }
  set stepSuffix(value){
    this.setAttribute("stepSuffix",value)
  }
  static get observedAttributes() {
    return ["text","stepPrefix","stepSuffix","indexShow"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.$step.setAttribute("text", this.text);
    this.$step.setAttribute("stepPrefix", this.stepPrefix||"step");
    this.$step.setAttribute("stepIndex", this.stepIndex);
    this.$step.setAttribute("indexShow",this.indexShow);
    this.$step.setAttribute("stepSuffix",this.stepSuffix||"：")
    this.$step.innerHTML = this.innerHTML;
  }
}

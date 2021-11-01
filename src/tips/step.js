const template = document.createElement("template");

template.innerHTML = `
    <style>
    step {
      display: block;
    }
    step::before {
      display: block;
      margin-top: 20px;
      font-size: 20px;
      content: attr(stepPrefix) attr(stepIndex) "：" attr(text);
    }
    step {
      margin: 0 50px;
      border-bottom: 1px solid;
      counter-increment: step-value;
    }
    step:last-child {
      border-bottom: none;
    }</style>
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
  static get observedAttributes() {
    return ["text","stepPrefix"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  render() {
    this.$step.setAttribute("text", this.text);
    this.$step.setAttribute("stepPrefix", this.stepPrefix||"步骤");
    this.$step.setAttribute("stepIndex", this.stepIndex);
    this.$step.setAttribute("indexShow",this.indexShow);
    this.$step.innerHTML = this.innerHTML;
  }
}

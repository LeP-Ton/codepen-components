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
      content: "步骤" attr(stepIndex) "：" attr(text);
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

    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$step = this._shadowRoot.querySelector("step");
    this.stepNodeList = document.getElementsByTagName("codepen-step");
    this.stepIndex =
      Array.prototype.slice.call(this.stepNodeList).indexOf(this) + 1;
      console.log("---------",this.stepNodeList);
  }
  get text() {
    return this.getAttribute("text");
  }
  set text(value) {
    this.setAttribute("text", value);
  }
  static get observedAttributes() {
    return ["text"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  render() {
    this.$step.setAttribute("text", this.text);
    this.$step.setAttribute("stepIndex", this.stepIndex);
    this.$step.innerHTML = this.innerHTML;
  }
}

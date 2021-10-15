const template = document.createElement("template");
template.innerHTML = `
    <style>
    case{
      display: block;
    }
    case {
      border-bottom: 2px solid;
      // counter-increment: case-value;
    }
    case::before {
      display: block;
      margin-top: 30px;
      font-size: 30px;
      font-weight: bold;
      content: "例" attr(caseIndex) "：" attr(text);
    }</style>
    <case></case>
`;
export default class Case extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$case = this.shadow.querySelector("case");
    this.caseNodeList = document.getElementsByTagName("codepen-case");
    this.caseIndex =
      Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1;
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
    this.$case.setAttribute("text", this.text);
    this.$case.setAttribute("caseIndex", this.caseIndex);
    this.$case.innerHTML = this.innerHTML;
  }
}

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
      content: attr(casePrefix) attr(caseIndex) "：" attr(text);
    }</style>
    <case></case>
`;
export default class Case extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$case = this.shadow.querySelector("case");
    this.caseNodeList = document.getElementsByTagName("codepen-case");
    // this.caseIndex =
    //   Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1;
    this.indexShow==="true"||this.indexShow===null?this.caseIndex = Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1:this.caseIndex='';

  }
  get text() {
    return this.getAttribute("text");
  }
  set text(value) {
    this.setAttribute("text", value);
  }
  get casePrefix(){
    return this.getAttribute("casePrefix");
  }
  set casePrefix(value){
    this.setAttribute("casePrefix",value);
  }
  get indexShow(){
    return this.getAttribute("indexShow");
  }
  set indexShow(value){
    this.setAttribute("indexShow",value);
  }
  static get observedAttributes() {
    return ["text","casePrefix"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  render() {
    this.$case.setAttribute("text", this.text);
    this.$case.setAttribute("casePrefix", this.casePrefix||"例");
    this.$case.setAttribute("caseIndex", this.caseIndex);
    this.$case.setAttribute("indexShow",this.indexShow);
    this.$case.innerHTML = this.innerHTML;
  }
}

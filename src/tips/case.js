const template = document.createElement("template");
template.innerHTML = `
    <style>
    case{
      display: block;
      border-bottom: 2px solid;
    }
    case::before {
      display: block;
      margin-top: 30px;
      font-size: 30px;
      font-weight: bold;
      content: attr(casePrefix) attr(caseIndex) attr(caseSuffix) attr(text);
    }
    </style>
    <case></case>
`;
export default class Case extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$case = this.shadow.querySelector("case");
    this.caseNodeList = this.parentNode.getElementsByTagName("codepen-case");
    // this.caseIndex =
    //   Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1;
    this.indexShow === "true" || this.indexShow === null
      ? (this.caseIndex =
          Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1)
      : (this.caseIndex = "");
    this.render();
  }
  get text() {
    return this.getAttribute("text");
  }
  set text(value) {
    this.setAttribute("text", value);
  }
  get casePrefix() {
    return this.getAttribute("casePrefix");
  }
  set casePrefix(value) {
    this.setAttribute("casePrefix", value);
  }
  get indexShow() {
    return this.getAttribute("indexShow");
  }
  set indexShow(value) {
    this.setAttribute("indexShow", value);
  }
  get caseSuffix() {
    return this.getAttribute("caseSuffix");
  }
  set caseSuffix(value) {
    this.setAttribute("caseSuffix", value);
  }
  static get observedAttributes() {
    return ["text", "casePrefix", "caseSuffix", "indexShow"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    function getParentAttr(attrName,This) {
      let attrVal = This.parentNode.getAttribute(attrName);
      if (attrVal === "null") {
        attrVal = null;
      }
      if (attrVal === "undefined") {
        attrVal = undefined;
      }
      return attrVal;
    }
    this.$case.setAttribute("text", this.text);
    this.$case.setAttribute(
      "casePrefix",
      this.casePrefix || getParentAttr("prefix",this) || "case"
    );
    this.$case.setAttribute("caseIndex", this.caseIndex);
    this.$case.setAttribute(
      "indexShow",
      this.indexShow || getParentAttr("indexShow",this)
    );
    this.$case.setAttribute(
      "caseSuffix",
      this.caseSuffix || getParentAttr("suffix",this) || "："
    );
    this.$case.innerHTML = this.innerHTML;
  }
}

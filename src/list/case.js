import symbols from "./symbols";
const template = document.createElement("template");
template.innerHTML = `
    <style>
    case{
      display: block;
      border-bottom: 2px solid;
      position: relative;
      padding: 30px 30px 0 30px;
    }
    case::before {
      position: sticky;
      top:30px;
      width:250px;
      display: block;
      float: left;
      font-size: 30px;
      font-weight: bold;
      background: #222222;
      padding: 10px;
      border-radius:10px;
      color: #fff;
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
    this.nodeListIndex = Array.prototype.slice
      .call(this.caseNodeList)
      .indexOf(this);
    // this.caseIndex =
    //   Array.prototype.slice.call(this.caseNodeList).indexOf(this) + 1;
    this.caseIndex = this.nodeListIndex + 1;
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
    function getParentAttr(attrName, This) {
      if (This.parentNode.tagName === "LISTBOX") {
        let attrVal = This.parentNode.getAttribute(attrName);
        if (attrVal === "null") {
          attrVal = null;
        }
        if (attrVal === "undefined") {
          attrVal = undefined;
        }
        return attrVal;
      } else return undefined;
    }
    // 标题文本
    this.$case.setAttribute("text", this.text);
    // 序号前缀
    this.$case.setAttribute(
      "casePrefix",
      this.casePrefix || getParentAttr("prefix", this) || "case"
    );
    // 序号计数
    const symbolsVal = getParentAttr("symbols", this);
    symbolsVal
      ? (this.caseIndex = symbols(symbolsVal)[this.nodeListIndex])
      : this.caseIndex;
    this.$case.setAttribute(
      "caseIndex",
      this.indexShow === "true" || this.indexShow === null ? this.caseIndex : ""
    );
    // 是否显示序号
    this.$case.setAttribute(
      "indexShow",
      this.indexShow || getParentAttr("indexShow", this)
    );
    // 序号后缀
    this.$case.setAttribute(
      "caseSuffix",
      this.caseSuffix || getParentAttr("suffix", this) || "："
    );
    this.$case.innerHTML = this.innerHTML;
  }
}

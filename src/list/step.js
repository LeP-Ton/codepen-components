const template = document.createElement("template");

template.innerHTML = `
    <style>
      pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#eaeef3;color:#00193a}.hljs-doctag,.hljs-keyword,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-strong,.hljs-title{font-weight:700}.hljs-comment{color:#738191}.hljs-addition,.hljs-built_in,.hljs-literal,.hljs-name,.hljs-quote,.hljs-section,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-tag,.hljs-title,.hljs-type{color:#0048ab}.hljs-attribute,.hljs-bullet,.hljs-deletion,.hljs-link,.hljs-meta,.hljs-regexp,.hljs-subst,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#4c81c9}.hljs-emphasis{font-style:italic}    step {
      display: block;
      margin-left:300px;
      margin-bottom: 30px;
      font-size:1.5em;
      position:relative;
      line-height:1.5em;
      background: #f5f5f5;
      padding:1.5em;
      border: 1px solid;
      border-radius: 10px;
    }
    step::before {
      margin-bottom:10px;
      padding: 10px;
      display: inline-block;
      background:#222222d1;
      color:#fff;
      border-radius: 5px;
      font-size: 1em;
      content: attr(stepPrefix) attr(stepIndex) attr(stepSuffix) attr(text);
    }
    .text{
      background: linear-gradient(black 1px, transparent 0);
    background-size: 100% 1.5em;
    }
    .hljs{
      border-radius:5px;
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
    this.indexShow === "true" || this.indexShow === null
      ? (this.stepIndex =
          Array.prototype.slice.call(this.stepNodeList).indexOf(this) + 1)
      : (this.stepIndex = "");
    this.render();
  }
  get text() {
    return this.getAttribute("text");
  }
  set text(value) {
    this.setAttribute("text", value);
  }
  get stepPrefix() {
    return this.getAttribute("stepPrefix");
  }
  set stepPrefix(value) {
    this.setAttribute("stepPrefix", value);
  }
  get indexShow() {
    return this.getAttribute("indexShow");
  }
  set indexShow(value) {
    this.setAttribute("indexShow", value);
  }
  get stepSuffix() {
    return this.getAttribute("stepSuffix");
  }
  set stepSuffix(value) {
    this.setAttribute("stepSuffix", value);
  }
  static get observedAttributes() {
    return ["text", "stepPrefix", "stepSuffix", "indexShow"];
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
    this.$step.setAttribute("text", this.text);
    // 序号前缀
    this.$step.setAttribute(
      "stepPrefix",
      this.stepPrefix || getParentAttr("prefix", this) || "step"
    );
    // 序号计数
    this.$step.setAttribute("stepIndex", this.stepIndex);
    // 是否显示序号
    this.$step.setAttribute(
      "indexShow",
      this.indexShow || getParentAttr("indexShow", this)
    );
    // 序号后缀
    this.$step.setAttribute(
      "stepSuffix",
      this.stepSuffix || getParentAttr("suffix", this) || "："
    );
    this.$step.innerHTML = this.innerHTML;
  }
}

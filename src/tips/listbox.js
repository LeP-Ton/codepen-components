const template = document.createElement("template");
template.innerHTML = `
    <style>
      listbox{
        display:block;
      }
    </style>
    <listbox></listbox>
`;
/**
 * listbox作为列表的容器，可以装载case或step，可以在这里统一设置所有case或step的属性
 */
export default class ListBox extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$listbox = this.shadow.querySelector("listbox");
    this.render();
  }
  get prefix() {
    return this.getAttribute("prefix");
  }
  set prefix(value) {
    this.setAttribute("prefix", value);
  }
  get suffix() {
    return this.getAttribute("suffix");
  }
  set suffix(value) {
    this.setAttribute("suffix", value);
  }
  get indexShow() {
    return this.getAttribute("indexShow");
  }
  set indexShow(value) {
    this.setAttribute("indexShow", value);
  }
  // get system() {
  //   return this.getAttribute("system");
  // }
  // set system(value) {
  //   this.setAttribute("system", value);
  // }
  get symbols() {
    return this.getAttribute("symbols");
  }
  set symbols(value) {
    this.setAttribute("symbols", value);
  }
  static get observedAttributes() {
    // return ["prefix", "suffix", "indexShow", "system", "symbols"];
    return ["prefix", "suffix", "indexShow","symbols"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.$listbox.setAttribute("prefix", this.prefix);//序号前缀
    this.$listbox.setAttribute("suffix", this.suffix);//序号后缀
    this.$listbox.setAttribute("indexShow", this.indexShow);//是否显示序号
    // this.$listbox.setAttribute("system", this.system);//计数系统
    this.$listbox.setAttribute("symbols", this.symbols);//计数符号
    this.$listbox.innerHTML = this.innerHTML;
  }
}

const template = document.createElement("template");
template.innerHTML = `
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
  }
  get prefix(){
    return this.getAttribute("prefix")
  }
  set prefix(value){
    this.setAttribute("prefix",value)
  }
  get suffix(){
    return this.getAttribute("suffix")
  }
  set suffix(value){
    this.setAttribute("suffix",value)
  }
  get indexShow(){
    return this.getAttribute("indexShow")
  }
  set indexShow(value){
    this.setAttribute("indexShow",value)
  }
  get system(){
    return this.getAttribute("system")
  }
  set system(value){
    this.setAttribute("system",value)
  }
  get symbols(){
    return this.getAttribute("symbols")
  }
  set symbols(value){
    this.setAttribute("symbols",value)
  }
  static get observedAttributes() {
    return ["prefix","suffix","indexShow","system","symbols"];
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.$listbox.setAttribute("prefix", this.prefix);
    this.$listbox.setAttribute("suffix", this.suffix);
    this.$listbox.setAttribute("indexShow", this.indexShow);
    this.$listbox.setAttribute("system", this.system);
    this.$listbox.setAttribute("symbols",this.symbols);
    this.$listbox.innerHTML = this.innerHTML;
  }
}

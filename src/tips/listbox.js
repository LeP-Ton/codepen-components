const template = document.createElement("template");
template.innerHTML = `
    <listbox></listbox>
`;
/**
 * listbox作为列表的容器，可以装载case或step，可以在这里统一设置所有case或step的属性
 */
export default class listbox extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$listbox = this.shadow.querySelector("listbox");
    
  }
}

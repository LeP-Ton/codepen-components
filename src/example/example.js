const template = document.createElement("template");
template.innerHTML = `
<style>
    example{
        display:block;
        width:300px;
        height:300px;
        overflow:auto;
        border:1px solid;
        border-radius:5px;
    }
</style>
<example></example>
`;
export default class Example extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$example = this.shadow.querySelector("example");
  }
}

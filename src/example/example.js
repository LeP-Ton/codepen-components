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
<example>
    <button class="example-control"><i class="fas fa-camera"></i>播放</button>
</example>
`;
export default class Example extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: "open" });
    this.appendChild(template.content.cloneNode(true));
    this.$example = this.querySelector("example");
  }
  // render(){
  //   this.$example.innerHTML=this.innerHTML
  // }
}

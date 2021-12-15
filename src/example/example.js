const play=require('../img/play.png');
const pause=require('../img/pause.png')

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
        position:relative;
    }
    .demo{
      width:20px;
      height:20px;
      background-position:center;
      background-repeat:no-repeat;
      background-size:contain;
      position:absolute;
      top:20px;
      right:20px;
    }
</style>
<example>
    <button class="demo"></button>
</example>
`;
export default class Example extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$example = this.shadow.querySelector("example");
    this.$button=this.shadow.querySelector(".demo");
    this.$button.style.backgroundImage=`url(${play})`;
    this.state=false;
    this.$button.addEventListener('click',()=>{
      this.state=!this.state;
      if(this.state){
        this.$button.style.backgroundImage=`url(${pause})`
      }else{
        this.$button.style.backgroundImage=`url(${play})`
      }
    })
    // this.render();
  }
  // render(){
  //   this.$example.innerHTML=this.innerHTML
  // }
}

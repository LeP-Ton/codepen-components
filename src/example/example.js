import execute from './execute1.0.5';

const play=require('../img/play.png');
const pause=require('../img/pause.png');

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
      position:sticky;
      top:20px;
      left:20px;
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
        // 播放前初始化，清除example中的演示元素
        this.init();
        execute(this.shadow)
        // 等待播放完毕后按钮图标重设为play
        this.$button.style.backgroundImage=`url(${play})`
      }else{
        // 暂停播放
        this.$button.style.backgroundImage=`url(${play})`
      }
    })
    // this.render();
  }
  init(){

  }
  // render(){
  //   this.$example.innerHTML=this.innerHTML
  // }
}

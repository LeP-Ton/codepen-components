import execute from "./execute1.0.5";

const play = require("../img/play.png");
const pause = require("../img/pause.png");

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
    .demo-box{
      width:100%;
      height:100%;
    }
</style>
<example>
    <button class="demo"></button>
    <div class="demo-box"></div>
</example>
`;
export default class Example extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.$example = this.shadow.querySelector("example");
    this.$button = this.shadow.querySelector(".demo");
    this.$button.style.backgroundImage = `url(${play})`;
    this.isplaying = false;
    this.isplayed = false;
    this.$button.addEventListener("click", async () => {
      this.isplaying = !this.isplaying;
      if (this.isplaying) {
        this.$button.style.backgroundImage = `url(${pause})`;
        // 再次播放前初始化，清除example中的演示元素
        if (this.isplayed) {
          this.shadow.querySelector(".demo-box").innerHTML="";
        }
        // 等待播放完毕后按钮图标重设为play,isplaying设置为false,isplayed设置为true
        await execute(this.shadow);
        this.$button.style.backgroundImage = `url(${play})`;
        this.isplaying = false;
        this.isplayed = true;
      } else {
        // 暂停播放
        this.$button.style.backgroundImage = `url(${play})`;
      }
    });
  }
}

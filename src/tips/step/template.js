import Step from "./step.js";
export default function render() {
  let target_div = document.createElement("div");
  target_div.innerHTML = `<template id="case">
    <step data-text="hello">hello</step>
  </template>`; //引号内填写的HTML代码
  document.body.append(target_div);
  window.customElements.define("codepen-tips", Step);
}

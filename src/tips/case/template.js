import Case from "./case.js";
export default function render() {
  let target_div = document.createElement("div");
  target_div.innerHTML = `<template id="case">
    <case data-text="hello">hello</case>
  </template>`; 
  document.body.append(target_div);
  window.customElements.define("codepen-tips", Case);
}

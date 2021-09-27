export default class Step extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "closed" });
      const tempElem = document.getElementById("step");
      console.log("tempElem", tempElem);
      const content = tempElem.content.cloneNode(true);
      shadow.appendChild(content);
    }
  }
  
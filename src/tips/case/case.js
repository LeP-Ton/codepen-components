export default class Case extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "closed" });
      const tempElem = document.getElementById("case");
      console.log("tempElem", tempElem);
      const content = tempElem.content.cloneNode(true);
      shadow.appendChild(content);
    }
  }
  
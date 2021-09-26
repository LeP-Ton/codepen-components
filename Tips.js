class Tips extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    const tempElem = document.getElementById("tips");
    const content = tempElem.content.cloneNode(true);
  }
}

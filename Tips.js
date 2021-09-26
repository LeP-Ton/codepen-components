class Tips extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    const tempElem = document.getElementById("tips");
    const content = tempElem.content.cloneNode(true);
    shadow.appendChild(content);
  }
}
document.write`
<template id="case">
  <case data-text="${dataText}"></case>
</template>
`;
window.customElements.define("tips", Tips);

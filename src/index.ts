(function main() {
  class Bryan extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      console.log(textoOriginal);

      var style = document.createElement("style");
      style.textContent = `
      .root{
        border: solid 2px red;
      }
      `;
      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      const div = document.createElement("div");
      div.className = "root";
      div.textContent = "que onda por aca";
      shadow.appendChild(div);
    }
  }
  customElements.define("bryan-el", Bryan);
})();

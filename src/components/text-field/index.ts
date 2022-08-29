export function init() {
  class Text extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");
      const div = document.createElement("div");
      div.className = "root";

      div.innerHTML = `
      <label class="label">${label}</label>
      <input type="text" placeholder="ingrese su  ${label}" />
      
      `;
      shadow.appendChild(div);
    }
  }
  customElements.define("textito-el", Text);
}

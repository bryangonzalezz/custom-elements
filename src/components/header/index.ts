export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerText = "Header";
      this.style.background = "#FF8282";
      this.style.width = "340px";
      this.style.height = "60px";
      this.style.justifyContent = "center";
      this.style.display = "flex";
      this.style.alignItems = "center";
      this.style.fontSize = "20px";
    }
  }
  customElements.define("custom-header", Header);
}

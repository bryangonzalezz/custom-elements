import { init as indeHeader } from "./components/header";
import { init as indeText } from "./components/text-field";

(function main() {
  indeHeader();
  indeText();
})();

// class Bryan extends HTMLElement {
//   // shadowRoot dentro de SHADOW par apóder ser ultilizado como una variable
//   shadow: ShadowRoot;

//   constructor() {
//     super();
//     this.shadow = this.attachShadow({ mode: "open" });
//     this.render();
//   }

//   render() {
//     const textoOriginal = this.textContent;
//     console.log(textoOriginal);

//     const style = document.createElement("style");
//     style.textContent = `
//     .router{
//       border: 5px black  solid ;
//       margin: 10px
//     }

//     `;

//     const divisor = document.createElement("div");
//     divisor.className = "router";
//     divisor.textContent = "holaaa " + textoOriginal;

//     const colorojo = this.getAttribute("type");

//     if (colorojo == "rojo") {
//       divisor.style.color = "red";
//     } else {
//       divisor.style.color = "blue";
//     }

//     if (this.children[0]) {
//       divisor.appendChild(this.children[0]);
//     }

//     this.shadow.appendChild(divisor);
//     this.shadow.appendChild(style);
//   }
// }
// customElements.define("bryan-el", Bryan);

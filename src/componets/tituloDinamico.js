class tituloDinamico extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({ mode: "open"});
    
    const componetRoot = document.createElement("h1");
    componetRoot.textContent = this.getAttribute("titulo");
    
    const style = document.createElement("style");
    style.textContent = `
    h1{
      color: red;
    }
    `
    
    shadow.appendChild(componetRoot);
    shadow.appendChild(style);
    
  }
}

customElements.define('titulo-dinamico', tituloDinamico);
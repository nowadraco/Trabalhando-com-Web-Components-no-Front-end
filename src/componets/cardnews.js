class cardNews extends HTMLElement {
  constructor(){
    super();
    const shadow = this.attachShadow({ mode: "open"});
    shadow.innerHTML = "<h1>hello word<h1/>"
  }
}

customElements.define('card-news',cardNews);
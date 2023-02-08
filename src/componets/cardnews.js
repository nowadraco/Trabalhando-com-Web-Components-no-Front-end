class cardNews extends HTMLElement {
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componetRoot = document.createElement("div");
    componetRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__Left");

    const autor = document.createElement("span");
    const linktitle = document.createElement("a");
    const newscontent = document.createElement("p");

    cardLeft.appendChild(autor);
    autor.textContent = "by " + (this.getAttribute("autor") || "anonymous");

    cardLeft.appendChild(linktitle);
    linktitle.textContent = this.getAttribute("title")
    linktitle.href =this.getAttribute("link-url");

    cardLeft.appendChild(newscontent);
    newscontent.textContent = this.getAttribute("contet")


    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__Right");
    const newsimage = document.createElement("img")
    newsimage.src = this.getAttribute("photo") || "./assets/img/default.png"
    newsimage.alt = "Darth Vader"
    cardRight.appendChild(newsimage);


    componetRoot.appendChild(cardLeft);
    componetRoot.appendChild(cardRight);

    return componetRoot
  }

  styles() {}
}

customElements.define('card-news',cardNews);
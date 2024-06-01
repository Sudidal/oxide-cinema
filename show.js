class Show {
  #name;
  #image;
  #watchLink;
  constructor(name, image, watchLink) {
    this.#name = name;
    this.#image = image;
    this.#watchLink = watchLink;
  }
  getName = () => this.#name;
  getImage = () => this.#image;
  getWatchLink = () => this.#watchLink;
}

export { Show };

class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.top = Math.floor(Math.random() * 500);
    this.left = 1500;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");
    this.rndnum = Math.floor(Math.random() * 7) + 1;

    this.element.src = `./images/img${this.rndnum}.png`;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log("obstacle position", this.element.getBoundingClientRect());
  }

  move() {
    this.left -= 5;
    this.updatePosition();
  }
}

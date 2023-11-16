class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-main");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      10,
      200,
      150,
      150,
      "./images/snowman.png"
    );
    this.width = "100vw";
    this.height = "100vh";
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.music = new Audio("./sounds/winter.wav");
    this.music.volume = 0.2;
    this.music.play();
    this.music.loop = true;
    this.music.playbackRate = 0.8;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver === true) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
  }

  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      if (this.score >= 5) {
        obstacle.move(3);
        this.music.playbackRate = 1.2;
      }
      if (this.score >= 10) {
        obstacle.move(6);
        this.music.playbackRate = 1.6;
      }
      obstacle.move(3);
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        document.getElementById("lives").textContent = this.lives;
        i--;
      } else if (obstacle.left <= 0) {
        this.score++;

        document.getElementById("score").textContent = this.score;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
    if (this.lives === 0) {
      this.endGame();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 4) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "flex";
    document.getElementById("score-value").innerText =
      "Your Score is: " + this.score;
    this.music.pause();
    this.over = new Audio("./sounds/game-over.wav");
    this.over.play();
  }
}

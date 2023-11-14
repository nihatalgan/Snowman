window.onload = function () {
  const startButton = document.getElementById("str-button");
  const restartButton = document.getElementById("restr-button");
  let game;

  function startGame() {
    console.log("start game");
    game = new Game(); // create an instance of the Game class
    game.start(); // execute the start method
    let music = new Audio("./sounds/winter.wav");
    music.volume = 0.2;
    music.play();
    music.loop = true;
  }

  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -3;

          break;
        case "ArrowUp":
          game.player.directionY = -3;
          break;
        case "ArrowRight":
          game.player.directionX = 3;
          break;
        case "ArrowDown":
          game.player.directionY = 3;
          break;
      }
    }
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};

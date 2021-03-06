import "./Styles/styles.scss";
import {
  removeElement,
  generateRandomNum10,
  calcDotValue,
  generateRandomNum
} from "./helper.js";

// shim layer with setTimeout fallback
var requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

class dotGame {
  constructor() {
    this.userScore = 0;
    this.isPlaying = false;
    this.dotPopulationInterval = null;
    this.dotAnimationId = null;
    this.dotFrequency = 1000; // every second, generate 1 new dot

    // randomized dot color
    this.dotColors = ["#d1cc99", "#784ecd", "#C7F464", "#FF6B6B", "#C44D58"];

    //selector
    this.scoreLabel = document.getElementById("score");
    this.gameBtn = document.getElementById("game-btn");
    this.speedController = document.getElementById("speed");
    this.speedLabel = document.getElementById("speed-value");
  }

  init() {
    this.setScore(this.userScore);
    this.setSpeed();
    this.gameBtn.addEventListener("click", () => this.toggleGame());
    this.speedController.addEventListener("change", () => this.setSpeed());
  }

  getSpeed() {
    return parseInt(this.speedController.value, 10);
  }

  setSpeed() {
    const speed = this.getSpeed();
    this.speedLabel.innerHTML = `${speed === 100 ? 'Max' : speed }`;
  }

  setScore(score) {
    this.userScore += score;
    this.scoreLabel.innerHTML = this.userScore;
    this.scoreLabel.classList.add('bounce');
    setTimeout(() => {
      this.scoreLabel.classList.remove('bounce');
    }, 200);
  }

  animateDots() {
    const dots = document.querySelectorAll(".dot");
    const playgroundHeight = document.getElementById("playground").offsetHeight;
    const speed = this.getSpeed();
    const fps = Math.ceil(speed / 60); // 60fps
    for (var i = 0; i < dots.length; i++) {
      var positionY = parseInt(dots[i].style.top, 10),
        velocity = (positionY += fps);

      if (positionY > playgroundHeight) {
        removeElement(dots[i]);
      }
      dots[i].style.top = velocity + "px";
    }
    this.dotAnimationId = requestAnimFrame(() => this.animateDots());
  }

  /**
   * populate dot every seconds
   */
  populateDots() {
    const playground = document.getElementById("playground");
    const dotSize = generateRandomNum10(10, 100);
    const dotValue = calcDotValue(dotSize);
    const playgroundWidth = document.getElementById("playground").offsetWidth;
    const maxWidth = playgroundWidth - 100; // 100 is the max dot width
    const leftPosition = generateRandomNum(0, maxWidth);
    const topPosition = 0 - dotSize - this.getSpeed();
    const color = this.dotColors[
      Math.floor(Math.random() * this.dotColors.length)
    ];
    const dotEl = document.createElement("span");
    dotEl.setAttribute("class", "dot");
    dotEl.setAttribute("data-size", dotSize);
    dotEl.setAttribute("data-value", dotValue);
    dotEl.style.width = dotSize + "px";
    dotEl.style.height = dotSize + "px";
    dotEl.style.top = topPosition + "px";
    dotEl.style.left = leftPosition + "px";
    dotEl.style.backgroundColor = color;
    dotEl.addEventListener("click", e => this.handleDotClicked(e));
    playground.appendChild(dotEl);
  }

  handleDotClicked(e) {
    const el = e.currentTarget;
    const dotValue = parseInt(el.getAttribute("data-value"), 10);
    if (this.isPlaying) {
      setTimeout(() => {
        this.setScore(dotValue);
        removeElement(el);
      }, 10);
    }
  }

  stop() {
    this.isPlaying = false;
    this.gameBtn.classList.add("play");
    this.gameBtn.classList.remove("pause");
    clearInterval(this.dotPopulationInterval);
    cancelAnimationFrame(this.dotAnimationId);
  }

  start() {
    this.isPlaying = true;
    this.gameBtn.classList.add("pause");
    this.gameBtn.classList.remove("play");
    this.dotPopulationInterval = setInterval(
      () => this.populateDots(),
      this.dotFrequency
    );
    this.dotAnimationId = requestAnimFrame(() => this.animateDots());
  }

  toggleGame() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }
}

window.onload = function() {
  const game = new dotGame();
  game.init();

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        game.stop();
      }
    },
    false
  );
};

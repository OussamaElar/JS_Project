import Ball from './scripts/ball';
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
      const canvas = document.getElementById("canvas")
      canvas.width = 400;
      canvas.height = 300;
      const ctx = canvas.getContext("2d");
      const ball = new Ball();
      new Game(ball, ctx).start()

});
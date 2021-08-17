import Ball from './scripts/ball';
import Game from './scripts/game';
import GoalKeeper from './scripts/goalkeeper'
window.onload = function() {
      const canvas = document.getElementById("canvas")
      canvas.width = 1000;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      const dir = Math.ceil(Math.random() * 7) * (Math.round(Math.random()) ? 1 : -1)
      const ball = new Ball(dir, -8);
      const goalkeeper = new GoalKeeper();
      new Game(ball, goalkeeper, ctx).start();
      
      
};
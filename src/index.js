import Ball from './scripts/ball';
import Game from './scripts/game';
import GoalKeeper from './scripts/goalkeeper';
import Cover from './scripts/cover';
import Component from './scripts/gamecomponents';
document.addEventListener("DOMContentLoaded", function (){
      const canvas = document.getElementById("canvas")
      canvas.width = 1000;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      const ball = new Ball();
      const goalkeeper = new GoalKeeper();
      const cover = new Cover();
      const comp = new Component();
      cover.gameInstructionsBack(ctx);
      cover.instructionText(ctx);

      const reset = document.querySelector(".reset");
      reset.addEventListener("click", e => {
            let speed = 2;
            const dir = Math.ceil(Math.random() * speed) * (Math.round(Math.random()) ? 1 : -1) 
            const dy = -speed
            const game = new Game(ball, goalkeeper, comp, ctx, dir, dy, speed)
            game.animate();
      });

      const med = document.querySelector(".med");
      med.addEventListener("click", e => {
            let speed = 4;
            const dir = Math.ceil(Math.random() * speed) * (Math.round(Math.random()) ? 1 : -1) 
            const dy = -speed
            const game = new Game(ball, goalkeeper, comp, ctx, dir, dy, speed)
            game.animate();
      });


      const easy = document.querySelector(".easy");
      easy.addEventListener("click", e => {
            let speed = 1;
            const dir = Math.ceil(Math.random() * speed) * (Math.round(Math.random()) ? 1 : -1) 
            const dy = -speed
            const game = new Game(ball, goalkeeper, comp, ctx, dir, dy, speed)
            game.animate();
      });

       const hard = document.querySelector(".hard");
      hard.addEventListener("click", e => {
            let speed = 8;
            const dir = Math.ceil(Math.random() * speed) * (Math.round(Math.random()) ? 1 : -1) 
            const dy = -speed
            const game = new Game(ball, goalkeeper, comp, ctx, dir, dy, speed)
            game.animate();
      });
      
});


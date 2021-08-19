import GoalKeeper from './goalkeeper';
import Ball from './ball';
import Component from './gamecomponents';
class Game {
      constructor(ball, goalkeeper, comp, ctx, dx, dy, speed) {
            this.ctx = ctx;
            this.ball = ball;
            this.goalkeeper = goalkeeper;
            this.comp = comp
            this.dx = dx;
            this.dy = dy;
            this.goalkeeper_save = 0;
            this.player_scored = 0;
            this.attempts_left = 5;
            this.rightKey = false;
            this.leftKey = false;
            this.gameOver = false;
            this.lAttempt = '';
            this.shootInProcess = false;
            this.nextShoot = 0;
            this.delayShoot = 3000;
            this.speed = speed
            
            document.addEventListener("keydown", this.keyDownHandler.bind(this));
            document.addEventListener("keyup", this.keyUpHandler.bind(this));
            
      }

      keyDownHandler (e) {
            if (e.keyCode == 39) {
                  console.log(e.keyCode);
                  this.rightKey = true;
            }
            else if (e.keyCode == 37) {
                  this.leftKey = true;
            }
      }

      keyUpHandler (e){
            if (e.keyCode == 39) {
                  this.rightKey = false;
            }
            else if (e.keyCode == 37) {
                  this.leftKey = false;
            }
      }

      showScore() {
            if (this.goalkeeper_save > this.player_scored) {
                  this.lAttempt = "YOU WON!!!";
                  this.gameOver = true;
            } else {
                  this.lAttempt = "YOU LOST!!!";
                  this.gameOver = true;
            }
            setTimeout(function () {
                  document.location.reload();
                  this.gameOver = false;
            }, 3000);
      }
      resetPitch() {
            Ball.width = 1000;
            Ball.height = 500;
            Ball.x = Ball.width/2;
            Ball.y = Ball.height - 95;
            GoalKeeper.width = 1000;
            GoalKeeper.height = 500;
            GoalKeeper.posKeeperX = (GoalKeeper.width - 50) / 2;
            GoalKeeper.posKeeperY = 80;
            GoalKeeper.goalPosX = (GoalKeeper.width - 350) / 2;
            GoalKeeper.goalPosY = 0;
            const dir = Math.ceil(Math.random() * this.speed) * (Math.round(Math.random()) ? 1 : -1)
            console.log(dir);
            this.dx = dir;
            this.dy = -this.speed

      }

      drawPitch() {
            this.ctx.clearRect(0, 0, 1000, 500);
            this.comp.score(this.ctx, this.goalkeeper_save);
            this.comp.attempts(this.ctx, this.attempts_left);
            this.ball.drawBall(this.ctx);
            this.goalkeeper.drawGoalKeeper(this.ctx)
            this.goalkeeper.drawGoal(this.ctx)
            this.comp.finalAttempt(this.ctx, this.lAttempt);
      }
      // main loop
      animate(time) {
            
            this.drawPitch()

            if (this.rightKey && GoalKeeper.posKeeperX < GoalKeeper.width - GoalKeeper.goalWidth) {
                  GoalKeeper.posKeeperX += 6
            } else if (this.leftKey && GoalKeeper.posKeeperX > GoalKeeper.goalPosX - 40) {
                  GoalKeeper.posKeeperX -= 6
            }

            
            if (!this.shootInProcess) {
                  if (time > this.nextShoot) {
                        this.shootInProcess = true;
                        this.lAttempt = '';
                  } else {
                        requestAnimationFrame(this.animate.bind(this));
                        return;
                  }
            }

            Ball.x += this.dx
            Ball.y += this.dy
          
            if (Ball.x > GoalKeeper.posKeeperX && Ball.x < GoalKeeper.posKeeperX + GoalKeeper.Kwidth && Ball.y > GoalKeeper.posKeeperY && Ball.y < GoalKeeper.posKeeperY + GoalKeeper.Kheight) {
                  this.shootInProcess = false;
                  this.nextShoot = time + this.delayShoot;
                  this.lAttempt = 'YOU SAVED THE BALL';
                  this.attempts_left -= 1;
                  this.goalkeeper_save += 1;
                  if (!this.attempts_left) {
                        this.showScore();
                  } else {
                        this.resetPitch();
                  }
            } else if (Ball.x > GoalKeeper.goalPosX && Ball.x < GoalKeeper.goalPosX + GoalKeeper.goalWidth && Ball.y > GoalKeeper.goalPosY && Ball.y < GoalKeeper.goalPosY + GoalKeeper.goalHeight) {
                  this.shootInProcess = false;
                  this.nextShoot = time + this.delayShoot;
                  this.lAttempt = 'YOU MISSED';
                  this.attempts_left -= 1;
                  this.player_scored += 1
                  if (!this.attempts_left) {
                        this.showScore();
                  } else {
                        this.resetPitch();
                  }
            } 
            requestAnimationFrame(this.animate.bind(this))
      }
      start() {
            this.drawPitch();
            this.nextShoot = this.delayShoot;
            requestAnimationFrame(this.animate.bind(this));
      }
      
      
}

export default Game 
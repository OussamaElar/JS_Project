import GoalKeeper from './goalkeeper';
import Ball from './ball';
class Game {
      constructor(ball, goalkeeper, ctx) {
            this.ctx = ctx;
            this.ball = ball;
            this.goalkeeper = goalkeeper;
            this.goalkeeper_save = 0;
            this.player_scored = 0;
            this.attempts_left = 5;
            this.rightKey = false;
            this.leftKey = false;
            
            document.addEventListener("keydown", this.keyDownHandler.bind(this));
            document.addEventListener("keyup", this.keyUpHandler.bind(this));
            
            // this.drawPitch();
      //       this.addBtn.bind(this);
      //       this.handleClick = this.handleClick.bind(this);
      }
      score() {
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "#ff900";
            this.ctx.fillText("Score: " + this.player_scored, 10, 20);
      }

      attempts() {
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "#ff900";
            this.ctx.fillText("Attempts: " + this.attempts_left, 10, 50);
      }

      drawPitch() {
            this.ctx.clearRect(0, 0, 1000, 500);
            this.ball.drawBall(this.ctx);
            this.goalkeeper.drawGoalKeeper(this.ctx);
            this.goalkeeper.drawGoal(this.ctx)
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
      // resetpitch() {
      //       Ball.width = 1000;
      //       Ball.height = 500;
      //       Ball.x = Ball.width/2;
      //       Ball.y = Ball.height - 80;
      //       GoalKeeper.width = 1000;
      //       GoalKeeper.height = 500;
      //       GoalKeeper.posKeeperX = (GoalKeeper.width - 75) / 2;
      //       GoalKeeper.posKeeperY = 40;
      //       GoalKeeper.goalPosX = (GoalKeeper.width - 350) / 2;
      //       GoalKeeper.goalPosY = 0;
      // }
      animate() {
            this.ctx.clearRect(0, 0, 1000, 500);
            this.score();
            this.attempts();
            this.ball.drawBall(this.ctx);
            this.ball.draw(this.ctx);
            this.goalkeeper.drawGoalKeeper(this.ctx)
            this.goalkeeper.drawGoal(this.ctx)
            if (this.rightKey && GoalKeeper.posKeeperX < GoalKeeper.width - GoalKeeper.goalWidth) {
                  GoalKeeper.posKeeperX += 6
            } else if (this.leftKey && GoalKeeper.posKeeperX > GoalKeeper.goalPosX - 40) {
                  GoalKeeper.posKeeperX -= 6
            }
            // debugger
            if (Ball.x > GoalKeeper.posKeeperX && Ball.x < GoalKeeper.posKeeperX + GoalKeeper.Kwidth && Ball.y > GoalKeeper.posKeeperY && Ball.y < GoalKeeper.posKeeperY + GoalKeeper.Kheight) {
                  alert("You Saved The Ball");
                  return;
            } else if (Ball.x > GoalKeeper.goalPosX && Ball.x < GoalKeeper.goalPosX + GoalKeeper.goalWidth && Ball.y > GoalKeeper.goalPosY && Ball.y < GoalKeeper.goalPosY + GoalKeeper.goalHeight) {
                  alert("You missed");
                  // document.location.reload();
                  // window.requestAnimationFrame(this.animate.bind(this))
                  return;
                  
                  
            } //else {
            //       alert("You Missed");
            //       // cancelAnimationFrame(myReq)
            // }

            window.requestAnimationFrame(this.animate.bind(this))

      }
      start() {
            // window.setInterval(this.animate.bind(this), 1)\
            
            window.requestAnimationFrame(this.animate.bind(this))
      }
      
      
}

export default Game 
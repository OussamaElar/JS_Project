# JS Project Proposal: Penalty Shootout Game
# Background 
#### Penalty Shoutout is a part of soccer game when two teams finish the game with a draw, they play a round of penalty shootout each team has five attempts and the team who scores more win the game, this project will be about this part. A player will play the goalkepper role and try to catch at least 3 balls out of 5 attempts to win the game  

## [Live Site](https://oussamaelar.github.io/JS_Project/)

![!](gifGame2.gif)

## Functionality & MVPs
### In this game, users will be able to:
     1. Control the goalkeeper by moving to the right or left 
     2. being able to choose between three different game mode  

![!](gifGame3.gif)

### In addition, this project will include: 
     1. A production README 
     2. An About modal describing the game rules 
# Wireframes 

![Wireframe](homepage2.png)

    1. Nav links include links to this project's Github repo, my LinkedIn and AngelList, and the About modal.
    2. Game controls will include a play button to start the game and three diffent modes to choose between, and the goalkeeper will be controled by left and right arrow keys.

# Technologies, Libraries, APIs
## this project will be implemeneted with the following technologies 
    1. Canvas API to render the game board, ball, player, goalkeeper.
    2. Webpack to bundle JavaScript code 
    3. npm to manage project dependencies

# Code Snippets
Game Class is where the game logic happens, the ball is moving in a random direction using this line of code:   `Math.ceil(Math.random() * this.speed) * (Math.round(Math.random()) ? 1 : -1)`,  instead of using an array of predefined directions, I used `Math.random()`,  with `Math.ceil`, that returns the next largest integer, which is going to be multiplied by the returned value of this trinary `(Math.round(Math.random()) ? 1 : -1)`, that controls whether the direction will be a negative or positive value, which basically means that the ball shot will go left, right or middle, what does make this piece of code unique is the ability to avoid hard coded directions, you will need to provide a single const which is the ball speed and it's going to do the rest for you.      

``` javaScript
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
                  GoalKeeper.posKeeperX += 4
            } else if (this.leftKey && GoalKeeper.posKeeperX > GoalKeeper.goalPosX - 40) {
                  GoalKeeper.posKeeperX -= 4
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
```
# Implementation Timeline
## Friday Afternoon & Weekend
Setup the environment and read more documentation about Canvas API and creating the game board, soccer ball, player, and goalkeeper classes. be able to render something on the screen by the end of Sunday.
## Monday
This day will be about building the logic behind the game and be able to make the ball move from a starting position to an ending position with controlled speed.
## Tuesday
If didn't get what I’m hoping for I will continue and make sure I will make it work, and I will work also on the controllers.
## Wednesday
Finish implementing user controls and making the ball move randomly and control the goalkeeper position, also finishing up all the styling needed.
## Thursday Morning
Deploy to GitHub.
# References 
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
https://stackoverflow.com/questions/37910307/how-to-set-a-delay-after-each-shot-in-html-5-js-canvas-football-penalty-game



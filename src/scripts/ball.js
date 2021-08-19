

class Ball {

      drawBall(ctx) {
            ctx.save() // begin a new path 
            ctx.beginPath();
            ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2);
            var background = new Image();
            background.src = "./SoccerBall.png";
            ctx.drawImage(background, Ball.x - Ball.radius, Ball.y - Ball.radius, Ball.ballHeight, Ball.ballWidth)         
      }
}



Ball.width = 1000;
Ball.height = 500;
Ball.x = Ball.width/2;
Ball.y = Ball.height - 80;
Ball.radius = 10;
Ball.ballHeight = 30;
Ball.ballWidth = 30;
export default Ball;
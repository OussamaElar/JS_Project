// import Img from './SoccerBall.png'

class Ball {
      constructor(dx, dy) {
            
            this.dx = dx;
            this.dy = dy;
      }

      drawBall(ctx) {
            ctx.save() // begin a new path 
            ctx.beginPath();
            ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2);
            var background = new Image();
            background.src = "./SoccerBall.png";
            // background.onload = function () {
                  
                  ctx.drawImage(background, Ball.x - Ball.radius, Ball.y - Ball.radius, Ball.ballHeight, Ball.ballWidth)    
            // }
            // ctx.clip();
            
      }


      draw(ctx) {
            
            
            Ball.x += this.dx;
            Ball.y += this.dy;
            ctx.restore();
            // requestAnimationFrame(Ball.draw)
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
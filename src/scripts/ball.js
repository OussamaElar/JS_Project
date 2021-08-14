

class Ball {
      constructor() {
            this.x = 400/2;
            this.y = 300-30;
      }

      drawBall(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
      }


      draw(ctx) {
            ctx.clearRect(0, 0, 400, 300);
            this.drawBall(ctx);
            this.x += -0.3;
            this.y += -1;
      }
}
export default Ball;
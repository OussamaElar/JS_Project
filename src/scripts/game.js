
class Game {
      constructor(ball, ctx) {
            
            this.ctx = ctx;
            this.ball = ball;
      }

      animate() {
            
            this.ball.draw(this.ctx);
      }
      start() {
            setInterval(this.animate.bind(this), 0.5)
      }
}

export default Game 
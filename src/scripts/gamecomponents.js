class Component {
      score(ctx, goalkeeper_save) {
            ctx.font = "Bold 20px Arial";
            ctx.fillStyle = "#ff900";
            ctx.font
            ctx.fillText("Score: " + goalkeeper_save, 20, 20);
      }

      attempts(ctx, attempts_left) {
            ctx.font = "Bold 20px Arial";
            ctx.fillStyle = "#ff900";
            ctx.fillText("Attempts: " + attempts_left, 20, 50);
      }

      finalAttempt(ctx, lAttempt) {
            ctx.font = 'Bold 70px geneva';
            ctx.fillStyle = "#0D261D";
            ctx.textAlign = 'center';
            ctx.fillText(lAttempt, 500, 330)
            ctx.textAlign = 'left';
      }
}

export default Component;
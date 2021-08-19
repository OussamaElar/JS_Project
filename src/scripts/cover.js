class Cover {
      constructor() {
            this.text = "You can start the game by clicking Play button, you will be able to control the goalkeeper using left or right arrow keys in your keyboard '◀︎ ▶︎', Try to catch more than 3 shoots to win the game.";
            this.maxWidth = 750;
            this.lineHeight = 50;
            this.x = 500;
            this.y = 150;
      }

      gameInstructionsBack(context) {

            context.rect(0, 0, 1000, 500);
            const grass = new Image();
            grass.onload = function() {
      
                  context.drawImage(grass, 0, 0);
            }
            grass.src = "./grass.jpeg";
            context.globalCompositeOperation='destination-over';
      }
      wrapText(context, text, x, y,  maxWidth, lineHeight) {
            let words = text.split(" ");  
            let line = "";  
             for (let n = 0; n < words.length; n++)   
             {  
                let tLine = line + words[n] + " ";  
                let measure = context.measureText(tLine);  
                let txtWidth = measure.width;  
                if (txtWidth > maxWidth) {  
                    context.fillText(line, x, y);  
                    line = words[n] + " ";  
                    y += lineHeight;  
                }  
                else {  
                    line = tLine;  
                }  
            }  
            context.fillText(line, x, y);  
      }
      instructionText(context) {
            
            context.font = 'Bold 40px optima';
            context.fillStyle = "#000000";
            context.textAlign = 'center';
            this.wrapText(context, this.text, this.x, this.y, this.maxWidth, this.lineHeight)
      }
}

export default Cover;
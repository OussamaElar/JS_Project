

class GoalKeeper {

      drawGoal(ctx) {
            ctx.beginPath();
            ctx.rect(GoalKeeper.goalPosX, GoalKeeper.goalPosY, GoalKeeper.goalWidth, GoalKeeper.goalHeight);
      }

      drawGoalKeeper(ctx) {
            ctx.beginPath();
            ctx.rect(GoalKeeper.posKeeperX, GoalKeeper.posKeeperY, GoalKeeper.Kwidth, GoalKeeper.Kheight);
            var keeper = new Image();
            keeper.src = "./goalkeeper.png";
            ctx.drawImage(keeper, GoalKeeper.posKeeperX - 37, GoalKeeper.posKeeperY ,GoalKeeper.Kwidth + 70, GoalKeeper.Kheight + 25 )
      }


}
GoalKeeper.width = 1000;
GoalKeeper.height = 500;
GoalKeeper.posKeeperX = (GoalKeeper.width - 50) / 2;
GoalKeeper.posKeeperY = 80;
GoalKeeper.goalPosX = (GoalKeeper.width - 350) / 2;
GoalKeeper.goalPosY = 0;
GoalKeeper.Kheight = 175;
GoalKeeper.Kwidth = 50;
GoalKeeper.goalHeight = 250;
GoalKeeper.goalWidth = 350;


export default GoalKeeper;
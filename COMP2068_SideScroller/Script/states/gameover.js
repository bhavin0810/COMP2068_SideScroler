/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Game Over State for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Game Over State for the Side Scroller game.
*/
/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceshuttle.ts" />
/// <reference path="../objects/smallinsect.ts" />
/// <reference path="../objects/biginsect.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    //GAME OVER STATE ++++++++++++++++++++++++++++++++++++++++++++++++++
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add space object to game
            this.space = new objects.Space();
            this.game.addChild(this.space);
            //Add the Game Over Label
            var gameOverLabel = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 100);
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(gameOverLabel);
            //Add the Final Score
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 200);
            this.game.addChild(finalScoreLabel);
            //Add the High Score 
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);
            // Add the Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton", constants.SCREEN_CENTER_WIDTH, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);
            stage.addChild(this.game);
        } //end of constructor
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.tryAgainButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        // UPDATE METHOD
        GameOver.prototype.update = function () {
            this.space.update();
        }; // update method end
        return GameOver;
    })();
    states.GameOver = GameOver; //end of GAMEOVER STATE
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
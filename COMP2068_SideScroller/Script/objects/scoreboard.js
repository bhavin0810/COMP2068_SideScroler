/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Scoreboard object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the scoreboard for the Side Scroller game.
*/
var objects;
(function (objects) {
    //SCOREBOARD OBJECT ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        //CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            //create label of the Lives
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);
            //Create Label of the Score
            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);
        } //end of constructor
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard; //end of Scoreboard object
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
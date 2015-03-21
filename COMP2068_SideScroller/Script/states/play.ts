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


module states {
    
    export class Play {

        //INSTANCE VARIABLES ++++++++++++++++++++++++++++++++
        public game: createjs.Container;
    
        public space: objects.Space;
        public spaceShuttle: objects.SpaceShuttle;
        public smallInsect: objects.SmallInsect[] = [];
        //public bigInsect: objects.BigInsect[] = [];  - this could be used in level of diffucuty
        public coin: objects.Coin[] = [];
        public scoreboard: objects.ScoreBoard;

        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add space to game
            this.space = new objects.Space();
            this.game.addChild(this.space);


            // Add island to game
            this.spaceShuttle = new objects.SpaceShuttle();
            this.game.addChild(this.spaceShuttle);



            for (var insect = constants.SMALLINSECTS_NUM; insect > 0; insect--) {
                this.smallInsect[insect] = new objects.SmallInsect();
                this.game.addChild(this.smallInsect[insect]);
            }
            /*
            for (var insect = constants.BIGINSECTS_NUM; insect > 0; insect--) {
                this.bigInsect[insect] = new objects.BigInsect();
                game.addChild(this.bigInsect[insect]);
            }
            */
            for (var count = constants.COIN_NUM; count > 0; count--) {
                this.coin[count] = new objects.Coin();
                this.game.addChild(this.coin[count]);
            }

            //Add Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            stage.addChild(this.game);
        }

        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++
        // Calculate the distance between two points ++++++++++++++++++++++++++++++++++++++
        distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //CHECK COLLISION  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.spaceShuttle.x;
            p1.y = this.spaceShuttle.y;
            p2.x = collider.x;
            p2.y = collider.y;
            if (this.distance(p2, p1) < ((this.spaceShuttle.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;

                    switch (collider.name) {
                        case "coin":
                            this.scoreboard.score += 100;
                            break;
                        case "smallInsects":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
        } // check collision end

        // UPDATE METHOD
        public update() {
            this.space.update();
            this.spaceShuttle.update();

            if (this.scoreboard.lives > 0) {
                for (var insect = constants.SMALLINSECTS_NUM; insect > 0; insect--) {
                    this.smallInsect[insect].update();
                    this.checkCollision(this.smallInsect[insect]);
                }
                /*
                for (var insect = constants.BIGINSECTS_NUM; insect > 0; insect--) {
                    this.bigInsect[insect].update();
                    this.checkCollision(this.bigInsect[insect]);
                }
                */
                for (var count = constants.COIN_NUM; count > 0; count--) {
                    this.coin[count].update();
                    this.checkCollision(this.coin[count]);
                }
            }

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {                
                createjs.Sound.stop();
                this.game.removeAllChildren();
                //stage.removeChild(game);
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;

            }
        }


    }
} 
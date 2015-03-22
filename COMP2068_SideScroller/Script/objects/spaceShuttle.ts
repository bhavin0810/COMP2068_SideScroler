/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Space Shuttle object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Space Shuttle for the Side Scroller game.
*/

module objects {

    //SPACE SHUTTLE OBJECT+++++++++++++++++++++++++++++++++++++++++
    export class SpaceShuttle extends objects.GameObject {
     
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //call the constructor of the super class
            super("spaceShuttle");
     
            this.x = constants.SCREEN_WIDTH - 30;
           
            createjs.Sound.play("galaxian", { loop: -1 });

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

}  
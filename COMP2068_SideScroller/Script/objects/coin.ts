/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Coin object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the coin object for the Side Scroller game.
*/

module objects {

    //COIN OBJECT ++++++++++++++++++++++++++++++++++++++++++++++++
    export class Coin extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //call the constructor of the super class
            super("coin");

            //set the name of the object
            this.name = "coin";

            //set the sound
            this.soundString = "coinCollect";

            //call the reset method of coin object
            this._reset();

        } //end of constructor
       
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {

            // set the coin to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;

            // add drift to the coin
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;

        } //end of reset method

        private _checkBounds() {

            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }

        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.y -= this._dy;
            this.x += this._dx;

            this._checkBounds();

        } //end of the update method

    } //end of coin objects

}     
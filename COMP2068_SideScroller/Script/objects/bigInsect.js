/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Big Insect object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Big Insect object for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //BIG INSECT OBJECT ++++++++++++++++++++++++++++++++++++++++++++++
    var BigInsect = (function (_super) {
        __extends(BigInsect, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function BigInsect() {
            //Call the constructor of the super class
            _super.call(this, "bigInsects");
            //Set the object name
            this.name = "bigInsects";
            //set the sound
            this.soundString = "thunder";
            //call the reset object event
            this._reset();
        } // end of constructor
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        //Reset Event of the Big Insect
        BigInsect.prototype._reset = function () {
            // set the big to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;
            //Add drift to the Big Insect
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        }; // end of the reset Event
        //CheckBound Method for the Big Insect
        BigInsect.prototype._checkBounds = function () {
            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }
        }; //end of the checkbound Event
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        BigInsect.prototype.update = function () {
            this.y -= this._dy;
            this.x += this._dx;
            this._checkBounds();
        }; //end of the update method
        return BigInsect;
    })(objects.GameObject);
    objects.BigInsect = BigInsect; //end of the BigInsect Object
})(objects || (objects = {}));
//# sourceMappingURL=biginsect.js.map
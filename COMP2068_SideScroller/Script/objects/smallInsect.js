/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: small Insect object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Small Insect for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //SMALL INSECT OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    var SmallInsect = (function (_super) {
        __extends(SmallInsect, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function SmallInsect() {
            //call constructor of the super classs
            _super.call(this, "smallInsects");
            //set the name of the object
            this.name = "smallInsects";
            //set the sound
            this.soundString = "thunder";
            this._reset();
        } //end of constructor
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        SmallInsect.prototype._reset = function () {
            // set the small insect to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;
            // add drift to the cloud 
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        }; //end of reset method
        SmallInsect.prototype._checkBounds = function () {
            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        SmallInsect.prototype.update = function () {
            this.y -= this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        return SmallInsect;
    })(objects.GameObject);
    objects.SmallInsect = SmallInsect; //end of the Small Insect Object
})(objects || (objects = {}));
//# sourceMappingURL=smallinsect.js.map
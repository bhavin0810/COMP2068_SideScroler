/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Coin object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the coin object for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //COIN OBJECT ++++++++++++++++++++++++++++++++++++++++++++++++
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Coin() {
            //call the constructor of the super class
            _super.call(this, "coin");
            //set the name of the object
            this.name = "coin";
            //set the sound
            this.soundString = "coinCollect";
            //call the reset method of coin object
            this._reset();
        } //end of constructor
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Coin.prototype._reset = function () {
            // set the coin to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;
            // add drift to the coin
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        }; //end of reset method
        Coin.prototype._checkBounds = function () {
            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Coin.prototype.update = function () {
            this.y -= this._dy;
            this.x += this._dx;
            this._checkBounds();
        }; //end of the update method
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin; //end of coin objects
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map
/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Space object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Space object for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //SPACE OBJECT++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Space = (function (_super) {
        __extends(Space, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Space() {
            //call the consturctor of the super class
            _super.call(this, assetLoader.getResult("space"));
            // PRIVATE INSTANCE VARIABLE +++++++++++++++++++++++++++++++++++
            this._dx = 5;
            //set the name of the object
            this.name = "space";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        } //end of constructor
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Space.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = -constants.SPACE_RESET_WIDTH;
            this.y = 0;
        };
        Space.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Space.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space; //end of space object
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map
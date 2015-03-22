/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Button object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Button object for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //BUTTON OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    var Button = (function (_super) {
        __extends(Button, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(stringPath, x, y) {
            //call the constructor of the super class
            _super.call(this, assetLoader.getResult(stringPath));
            //Set the Mouse Center Values
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
            //Add the mouseover and mouseout Events
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        } //end of the constructor
        // EVENT HANDLERS ++++++++++++++++++++++++++++++++++++++++++++++
        Button.prototype._buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        Button.prototype._buttonOver = function (event) {
            event.currentTarget.alpha = 0.5;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button; //end of the Button Object
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
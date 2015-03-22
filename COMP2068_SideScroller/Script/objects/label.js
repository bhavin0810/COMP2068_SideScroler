/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Label object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Label for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //LABEL OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    var Label = (function (_super) {
        __extends(Label, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++
        function Label(labelString, x, y) {
            // call the constructor of the super class
            _super.call(this, labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            //set the height andn width
            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = x;
            this.y = y;
        } //end of constructor
        return Label;
    })(createjs.Text);
    objects.Label = Label; //end of Label object
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map
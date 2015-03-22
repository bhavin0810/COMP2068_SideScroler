/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: GAME OBJECT SUPER CLASS of all the objects for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Game Object for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //GAMEOBJECT SUPER CLASS of All other Game Objects
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function GameObject(assetString) {
            //call constructor of the super class
            _super.call(this, assetLoader.getResult(assetString));
            //Set the height and width of te GAME OBJECT
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //console.log(this.width.toString());
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.isColliding = false;
        } // end of constructor
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject; //end of Game Object
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map
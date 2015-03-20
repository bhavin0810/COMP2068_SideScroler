module objects {

    export class Space extends createjs.Bitmap {
        
        // PUBLIC VARIABLES
        public width;
        public height;
        public name;
        // PRIVATE VARIABLE
        private _dx = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("space"));
            this.name = "space";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();
            
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = -constants.SPACE_RESET_WIDTH;
            this.y = 0
        }

        private _checkBounds() {
            if (this.x >= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x += this._dx;
            this._checkBounds();
        }
    }
}    
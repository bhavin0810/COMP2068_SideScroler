module objects {

    export class SpaceShuttle extends objects.GameObject {
     
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("spaceShuttle");
     
            this.x = constants.SCREEN_WIDTH - 30;
           
            createjs.Sound.play("engine", { loop: -1 });

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

}  
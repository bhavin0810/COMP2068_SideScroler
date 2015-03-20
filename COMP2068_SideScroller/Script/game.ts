/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />


/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/spaceshuttle.ts" />
/// <reference path="objects/smallinsect.ts" />
/// <reference path="objects/biginsect.ts" />
/// <reference path="objects/coin.ts" />



// Game Variables +++++++++++++++++++++++++++++++++++++++++++++
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var game: createjs.Container;

// Game Objects
var space: objects.Space;
var spaceShuttle: objects.SpaceShuttle;
var smallInsect: objects.SmallInsect[] = [];
//var bigInsect: objects.BigInsect[] = [];  - this could be used in level of diffucuty
var coin: objects.Coin[] = [];

// asset manifest - array of asset objects
var manifest = [
    { id: "spaceShuttle", src: "assets/images/spaceShuttle.jpg" },
    { id: "space", src: "assets/images/space.jpg" },
    { id: "smallInsects", src: "assets/images/smallInsects.png" },
    { id: "bigInsects", src: "assets/images/bigInsects.png" },    
    { id: "coin", src: "assets/images/coin.png" },    
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
];


function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    main();
}

// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}

// Calculate the distance between two points ++++++++++++++++++++++++++++++++++++++
function distance(p1: createjs.Point, p2: createjs.Point): number {

    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}

//CHECK COLLISION  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function checkCollision(collider: objects.GameObject) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    p1.x = spaceShuttle.x;
    p1.y = spaceShuttle.y;
    p2.x = collider.x;
    p2.y = collider.y;
    if (distance(p2, p1) < ((spaceShuttle.height * 0.5) + (collider.height * 0.5))) {
        if (!collider.isColliding) {
            createjs.Sound.play(collider.soundString);
            collider.isColliding = true;
            /*
            switch (collider.name) {
                case "island":
                    scoreboard.score += 100;
                case "cloud":
                    scoreboard.lives--;
                    break;
            } */
        }
    } else {
        collider.isColliding = false;
    }
}

//GAME LOOP +++++++++++++++++++++++++++++
function gameLoop() {
    stats.begin(); // Begin metering
    space.update();
    spaceShuttle.update();

    for (var insect = constants.SMALLINSECTS_NUM; insect> 0; insect--) {
        smallInsect[insect].update();
        checkCollision(smallInsect[insect]);
    }
    /*
    for (var insect = constants.BIGINSECTS_NUM; insect > 0; insect--) {
        bigInsect[insect].update();
        checkCollision(bigInsect[insect]);
    }
    */
    for (var count = constants.COIN_NUM; count > 0; count--) {
        coin[count].update();
        checkCollision(coin[count]);
    }

    stage.update(); // Refreshes our stage

    stats.end(); // End metering
}

// Our Game Kicks off in here
function main() {
    // Instantiate Game Container
    game = new createjs.Container();

    // Add space to game
    space = new objects.Space();
    game.addChild(space);


    // Add island to game
    spaceShuttle= new objects.SpaceShuttle();
    game.addChild(spaceShuttle);

  

    for (var insect = constants.SMALLINSECTS_NUM; insect > 0; insect--) {
        smallInsect[insect] = new objects.SmallInsect();
        game.addChild(smallInsect[insect]);
    }
    /*
    for (var insect = constants.BIGINSECTS_NUM; insect > 0; insect--) {
        bigInsect[insect] = new objects.BigInsect();
        game.addChild(bigInsect[insect]);
    }
    */
    for (var count = constants.COIN_NUM; count > 0; count--) {
        coin[count] = new objects.Coin();
        game.addChild(coin[count]);
    }

    stage.addChild(game);

}
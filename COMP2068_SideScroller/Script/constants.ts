/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Constants object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the constants object for the Side Scroller game.
*/

module constants {

    //FONTS CONSTANTS ++++++++++++++++++++++++++++++++++++++++++
    export var FONT_SIZE: string = "40px";
    export var FONT_FAMILY: string = "Consolas";
    export var FONT_COLOUR: string = "#FFFF00";

    // SCREEN CONSTANTS ++++++++++++++++++++++++++++++++++
    export var SCREEN_WIDTH: number = 640;
    export var SCREEN_HEIGHT: number = 480;
    export var SCREEN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCREEN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    export var SPACE_RESET_WIDTH: number = 480;

    // GAME OBJECTS CONSTANTS ++++++++++++++++++++++++++++++++++++
    export var PLAYER_LIVES: number = 5;
    export var SMALLINSECTS_NUM: number = 3;
    //export var BIGINSECTS_NUM: number = 1; -- this could be used in next level of the game beacuse GAME BECOME TO COMPLICATED
    export var COIN_NUM: number = 2;

    // STATE CONSTANTS +++++++++++++++++++++++++++++++++++++++
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;

}  
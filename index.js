import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Lobby from "./Lobby/Lobby.js";
import Player1InLobby from "./Player1InLobby/Player1InLobby.js";
import Player2InLobby from "./Player2InLobby/Player2InLobby.js";
import Player3InLobby2 from "./Player3InLobby2/Player3InLobby2.js";
import News from "./News/News.js";
import ChangeGameModeButton from "./ChangeGameModeButton/ChangeGameModeButton.js";
import Maze from "./Maze/Maze.js";
import Player1InGame from "./Player1InGame/Player1InGame.js";
import Player2InGame from "./Player2InGame/Player2InGame.js";
import Player3inGame from "./Player3inGame/Player3inGame.js";
import Star from "./Star/Star.js";
import Beetle from "./Beetle/Beetle.js";
import Beetle2 from "./Beetle2/Beetle2.js";
import YouLose from "./YouLose/YouLose.js";
import Ghost from "./Ghost/Ghost.js";
import MazeTag from "./MazeTag/MazeTag.js";
import Player1TagIngame from "./Player1TagIngame/Player1TagIngame.js";
import Player2InGameTag from "./Player2InGameTag/Player2InGameTag.js";
import Player3inGame2 from "./Player3inGame2/Player3inGame2.js";
import P1Race from "./P1Race/P1Race.js";
import P2Race from "./P2Race/P2Race.js";
import RaceWinScreen from "./RaceWinScreen/RaceWinScreen.js";
import PlayersOne from "./PlayersOne/PlayersOne.js";
import PlayersTwo from "./PlayersTwo/PlayersTwo.js";
import PlayersThree from "./PlayersThree/PlayersThree.js";
import Score from "./Score/Score.js";
import Win from "./Win/Win.js";
import PlayerWhoIsItTag from "./PlayerWhoIsItTag/PlayerWhoIsItTag.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Lobby: new Lobby({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Player1InLobby: new Player1InLobby({
    x: 69,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Player2InLobby: new Player2InLobby({
    x: -16,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player3InLobby2: new Player3InLobby2({
    x: 191,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  News: new News({
    x: -166,
    y: -65,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  ChangeGameModeButton: new ChangeGameModeButton({
    x: -18,
    y: 118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Maze: new Maze({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1InGame: new Player1InGame({
    x: -65,
    y: -100,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player2InGame: new Player2InGame({
    x: -30,
    y: 49.000000000000014,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame: new Player3inGame({
    x: -55,
    y: 16,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Star: new Star({
    x: 54,
    y: 81,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Beetle: new Beetle({
    x: 47,
    y: 90,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle2: new Beetle2({
    x: 158,
    y: 154,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  YouLose: new YouLose({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Ghost: new Ghost({
    x: -186.0115600601835,
    y: -72.13088278613117,
    direction: 32.134474844199175,
    costumeNumber: 1,
    size: 36,
    visible: false
  }),
  MazeTag: new MazeTag({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1TagIngame: new Player1TagIngame({
    x: -25,
    y: -25,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player2InGameTag: new Player2InGameTag({
    x: -45,
    y: -81,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame2: new Player3inGame2({
    x: 145,
    y: 66,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  P1Race: new P1Race({
    x: 146,
    y: 103,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  P2Race: new P2Race({
    x: 191,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  RaceWinScreen: new RaceWinScreen({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersOne: new PlayersOne({
    x: 2,
    y: 24,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  PlayersTwo: new PlayersTwo({
    x: 128,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  PlayersThree: new PlayersThree({
    x: 70,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Score: new Score({
    x: -213,
    y: 143,
    direction: 90,
    costumeNumber: 31,
    size: 25,
    visible: false
  }),
  Win: new Win({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayerWhoIsItTag: new PlayerWhoIsItTag({
    x: -182,
    y: 137,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;

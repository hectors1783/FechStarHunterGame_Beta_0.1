/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Race", "./Stage/costumes/Race.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Strat race" },
        this.whenIReceiveStratRace
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "return to lobby" },
        this.whenIReceiveReturnToLobby
      )
    ];

    this.vars.myVariable = 1;
    this.vars.gameMode = 1;
    this.vars.playersInParty = 1;
    this.vars.inGame = "n";
    this.vars.Highscore = 750;
    this.vars.score = 30;
    this.vars.playersAlive = 1;
    this.vars.playWhoIsItTag = "Red";
    this.vars.canStillWinInRace = "no";
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenIReceiveStratRace() {
    this.costume = "Race";
  }

  *whenIReceiveReturnToLobby() {
    this.costume = "backdrop1";
  }
}

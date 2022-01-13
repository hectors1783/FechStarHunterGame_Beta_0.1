/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class P2Race extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./P2Race/costumes/dot-a.svg", {
        x: 51.744248376908786,
        y: 66.71215366453237
      })
    ];

    this.sounds = [new Sound("bark", "./P2Race/sounds/bark.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Strat race" },
        this.whenIReceiveStratRace
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Strat race" },
        this.whenIReceiveStratRace2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStratRace() {
    this.visible = true;
    this.goto(-169, -85);
    while (true) {
      if (this.keyPressed("d")) {
        while (!!this.keyPressed("d")) {
          yield;
        }
        this.x += 3;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        if (this.stage.vars.canStillWinInRace == "yes") {
          this.broadcast("Green wins race");
          this.stage.vars.canStillWinInRace = "no";
        }
      }
      yield;
    }
  }

  *whenIReceiveStratRace2() {
    this.stopAllSounds();
    while (true) {
      yield* this.playSoundUntilDone("Here come dat boi");
      yield;
    }
  }
}

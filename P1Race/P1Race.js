/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class P1Race extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./P1Race/costumes/dot-a.svg", {
        x: 51.74422418845441,
        y: 66.71217683226618
      })
    ];

    this.sounds = [new Sound("bark", "./P1Race/sounds/bark.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Strat race" },
        this.whenIReceiveStratRace
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStratRace() {
    this.stage.vars.canStillWinInRace = "yes";
    this.visible = true;
    this.goto(-175, 103);
    while (true) {
      if (this.keyPressed("right arrow")) {
        while (!!this.keyPressed("right arrow")) {
          yield;
        }
        this.x += 3;
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        if (this.stage.vars.canStillWinInRace == "yes") {
          this.broadcast("Red wins race");
          this.stage.vars.canStillWinInRace = "no";
        }
      }
      yield;
    }
  }
}

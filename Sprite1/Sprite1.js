/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.png", {
        x: 454,
        y: 225
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume1";
    this.visible = true;
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(2);
    this.visible = false;
    this.stopAllSounds();
    this.broadcast("return to lobby");
  }
}

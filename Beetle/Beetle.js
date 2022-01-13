/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle/costumes/beetle.svg", { x: 43, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Beetle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStartNormal() {
    this.visible = true;
    this.size = 20;
    this.goto(-130, 80);
    this.direction = 90;
    while (true) {
      this.move(2);
      if (this.touching(this.sprites["Maze"].andClones())) {
        this.move(-5);
        if (this.random(1, 2) == 1) {
          this.direction += 90;
        } else {
          this.direction -= 90;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

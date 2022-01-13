/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MazeTag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MazeTag/costumes/costume1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./MazeTag/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartTag() {
    this.visible = true;
    this.goto(0, 0);
  }

  *whenIReceiveStartTag2() {
    while (true) {
      yield* this.playSoundUntilDone("Nebula");
      yield;
    }
  }
}

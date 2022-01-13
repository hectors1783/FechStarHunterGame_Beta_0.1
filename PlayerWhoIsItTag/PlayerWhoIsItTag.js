/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerWhoIsItTag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Green", "./PlayerWhoIsItTag/costumes/Green.svg", {
        x: 31.909988403320312,
        y: 27.51875000000001
      }),
      new Costume("Red", "./PlayerWhoIsItTag/costumes/Red.svg", {
        x: 31.909988403320312,
        y: 27.51875000000001
      }),
      new Costume("Blue", "./PlayerWhoIsItTag/costumes/Blue.svg", {
        x: 31.909988403320312,
        y: 27.51875000000001
      })
    ];

    this.sounds = [new Sound("pop", "./PlayerWhoIsItTag/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartTag() {
    this.goto(-182, 137);
    this.visible = true;
    while (true) {
      this.costume = this.stage.vars.playWhoIsItTag;
      yield;
    }
  }
}

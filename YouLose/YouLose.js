/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class YouLose extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./YouLose/costumes/costume1.svg", {
        x: 157.5,
        y: 133
      })
    ];

    this.sounds = [new Sound("pop", "./YouLose/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You Lost" },
        this.whenIReceiveYouLost
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveYouLost() {
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }
}

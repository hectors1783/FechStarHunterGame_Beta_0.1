/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Win extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Win/costumes/costume1.svg", {
        x: 126.5,
        y: 87
      })
    ];

    this.sounds = [new Sound("pop", "./Win/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "return to lobby" },
        this.whenIReceiveReturnToLobby
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    this.visible = true;
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveReturnToLobby() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RaceWinScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Green", "./RaceWinScreen/costumes/Green.svg", {
        x: 159.46304321289062,
        y: 102.31817626953125
      }),
      new Costume("Red", "./RaceWinScreen/costumes/Red.svg", {
        x: 159.46304321289062,
        y: 102.31817626953125
      })
    ];

    this.sounds = [new Sound("pop", "./RaceWinScreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Green wins race" },
        this.whenIReceiveGreenWinsRace
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red wins race" },
        this.whenIReceiveRedWinsRace
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGreenWinsRace() {
    this.costume = "Green";
    this.visible = true;
  }

  *whenIReceiveRedWinsRace() {
    this.visible = true;
    this.costume = "Red";
  }
}

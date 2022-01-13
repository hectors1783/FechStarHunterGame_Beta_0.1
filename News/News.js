/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class News extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./News/costumes/costume1.svg", {
        x: 68.45833333333334,
        y: 95.31067961165044
      })
    ];

    this.sounds = [new Sound("pop", "./News/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "return to lobby" },
        this.whenIReceiveReturnToLobby
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      ),
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

  *whenIReceiveReturnToLobby() {
    this.visible = true;
    this.goto(-166, -65);
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveStartNormal() {
    this.visible = false;
  }

  *whenIReceiveStartTag() {
    this.visible = false;
  }

  *whenIReceiveStratRace() {
    this.visible = false;
  }
}

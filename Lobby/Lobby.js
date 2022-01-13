/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lobby extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Lobby/costumes/costume1.svg", {
        x: 247.75,
        y: 185.25
      })
    ];

    this.sounds = [new Sound("pop", "./Lobby/sounds/pop.wav")];

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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Strat race" },
        this.whenIReceiveStratRace2
      )
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceiveReturnToLobby() {
    this.visible = true;
    this.goto(0, 0);
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

  *whenIReceiveStratRace2() {
    /* TODO: Implement data_hidevariable */ null;
  }
}

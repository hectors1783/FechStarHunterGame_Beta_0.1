/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player3InLobby2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player3InLobby2/costumes/dot-a.svg", {
        x: 51.74422837690892,
        y: 66.7121736645324
      })
    ];

    this.sounds = [new Sound("bark", "./Player3InLobby2/sounds/bark.wav")];

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
        { name: "Start normal" },
        this.whenIReceiveStartNormal2
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
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = false;
  }

  *whenIReceiveReturnToLobby() {
    while (true) {
      if (this.stage.vars.inGame == "n") {
        if (this.stage.vars.playersInParty == 3) {
          this.visible = true;
          this.goto(191, -76);
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveStartNormal() {
    this.visible = false;
  }

  *whenIReceiveStartNormal2() {
    this.visible = false;
  }

  *whenIReceiveStartTag() {
    this.visible = false;
  }

  *whenIReceiveStratRace() {
    this.visible = false;
  }
}

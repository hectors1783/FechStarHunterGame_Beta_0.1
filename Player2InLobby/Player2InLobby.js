/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2InLobby extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player2InLobby/costumes/dot-a.svg", {
        x: 51.74422418845441,
        y: 66.71217683226618
      })
    ];

    this.sounds = [new Sound("bark", "./Player2InLobby/sounds/bark.wav")];

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
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = false;
  }

  *whenIReceiveReturnToLobby() {
    while (true) {
      if (this.stage.vars.inGame == "n") {
        if (
          this.stage.vars.playersInParty == 2 ||
          this.stage.vars.playersInParty == 3
        ) {
          this.visible = true;
          this.goto(-16, -62);
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

  *whenIReceiveStartTag() {
    this.visible = false;
  }

  *whenIReceiveStratRace() {
    this.visible = false;
  }
}

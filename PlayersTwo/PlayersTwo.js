/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayersTwo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayersTwo/costumes/costume1.svg", {
        x: 56.5,
        y: 24.5
      })
    ];

    this.sounds = [new Sound("pop", "./PlayersTwo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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

  *whenthisspriteclicked() {
    this.stage.vars.playersInParty = 2;
  }

  *whenIReceiveReturnToLobby() {
    this.visible = true;
    this.goto(128, 21);
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

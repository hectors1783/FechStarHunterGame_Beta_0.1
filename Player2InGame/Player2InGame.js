/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2InGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player2InGame/costumes/dot-a.svg", {
        x: 51.77605163912165,
        y: 53.06465877386154
      })
    ];

    this.sounds = [new Sound("bark", "./Player2InGame/sounds/bark.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal2
      )
    ];
  }

  *whenIReceiveStartNormal() {
    while (true) {
      if (
        this.touching(this.sprites["Beetle"].andClones()) ||
        this.touching(this.sprites["Beetle2"].andClones())
      ) {
        this.visible = false;
        this.stage.vars.playersAlive += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartNormal2() {
    if (
      this.stage.vars.playersInParty == 2 ||
      this.stage.vars.playersInParty == 3
    ) {
      this.visible = true;
      this.size = 20;
      this.goto(-170, 24);
      while (true) {
        if (this.keyPressed("w")) {
          this.direction = 0;
          this.move(5);
        }
        if (this.keyPressed("s")) {
          this.direction = 180;
          this.move(5);
        }
        if (this.keyPressed("d")) {
          this.direction = 90;
          this.move(5);
        }
        if (this.keyPressed("a")) {
          this.direction = -90;
          this.move(5);
        }
        if (this.touching(this.sprites["Maze"].andClones())) {
          this.move(-5);
        }
        yield;
      }
    }
  }
}

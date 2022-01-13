/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2InGameTag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player2InGameTag/costumes/dot-a.svg", {
        x: 51.77605163912165,
        y: 53.06465877386154
      })
    ];

    this.sounds = [new Sound("bark", "./Player2InGameTag/sounds/bark.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag3
      )
    ];
  }

  *whenIReceiveStartTag() {
    while (true) {
      if (this.stage.vars.playWhoIsItTag == "Blue") {
        if (this.touching(this.sprites["Player3inGame2"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Green";
        }
      }
      if (this.stage.vars.playWhoIsItTag == "Red") {
        if (this.touching(this.sprites["Player1TagIngame"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Green";
        }
      }
      yield;
    }
  }

  *whenIReceiveStartTag2() {
    while (true) {
      null;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartTag3() {
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
        if (this.touching(this.sprites["MazeTag"].andClones())) {
          this.move(-5);
        }
        yield;
      }
    }
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player3inGame2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player3inGame2/costumes/dot-a.svg", {
        x: 51.776055827576215,
        y: 53.06465877386157
      })
    ];

    this.sounds = [new Sound("bark", "./Player3inGame2/sounds/bark.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag2
      )
    ];
  }

  *whenIReceiveStartTag() {
    while (true) {
      if (this.stage.vars.playWhoIsItTag == "Green") {
        if (this.touching(this.sprites["Player2InGameTag"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Blue";
        }
      }
      if (this.stage.vars.playWhoIsItTag == "Red") {
        if (this.touching(this.sprites["Player1TagIngame"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Blue";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
    this.stage.vars.playWhoIsItTag = "Red";
  }

  *whenIReceiveStartTag2() {
    if (this.stage.vars.playersInParty == 3) {
      this.visible = true;
      this.size = 20;
      this.goto(-55, 16);
      while (true) {
        if (this.keyPressed(8)) {
          this.direction = 0;
          this.move(5);
        }
        if (this.keyPressed(5)) {
          this.direction = 180;
          this.move(5);
        }
        if (this.keyPressed(6)) {
          this.direction = 90;
          this.move(5);
        }
        if (this.keyPressed(4)) {
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

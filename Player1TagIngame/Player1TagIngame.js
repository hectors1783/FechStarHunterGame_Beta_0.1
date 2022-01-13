/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1TagIngame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dot-a", "./Player1TagIngame/costumes/dot-a.svg", {
        x: 51.77605745066711,
        y: 53.06465877386151
      })
    ];

    this.sounds = [new Sound("bark", "./Player1TagIngame/sounds/bark.wav")];

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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Tag" },
        this.whenIReceiveStartTag4
      )
    ];
  }

  *whenIReceiveStartTag() {
    while (true) {
      if (this.stage.vars.playWhoIsItTag == "Green") {
        if (this.touching(this.sprites["Player2InGameTag"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Red";
        }
      }
      if (this.stage.vars.playWhoIsItTag == "Blue") {
        if (this.touching(this.sprites["Player3inGame2"].andClones())) {
          yield* this.wait(2);
          this.stage.vars.playWhoIsItTag = "Red";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartTag2() {
    /* TODO: Implement data_hidevariable */ null;
    this.visible = true;
    this.size = 20;
    this.goto(-125, 25);
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.direction = 0;
        this.move(5);
      }
      if (this.keyPressed("down arrow")) {
        this.direction = 180;
        this.move(5);
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(5);
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.move(5);
      }
      if (this.touching(this.sprites["MazeTag"].andClones())) {
        this.move(-5);
      }
      yield;
    }
  }

  *whenIReceiveStartTag3() {
    while (true) {
      null;
      yield;
    }
  }

  *whenIReceiveStartTag4() {
    while (true) {
      if (this.keyPressed("q")) {
        this.broadcast("You Lost");
      }
      yield;
    }
  }
}

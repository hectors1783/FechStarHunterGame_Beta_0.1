/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ghost extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ghost-a", "./Ghost/costumes/ghost-a.svg", { x: 37, y: 68 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      )
    ];
  }

  *whenIReceivePlay() {
    while (true) {
      this.visible = false;
      yield* this.wait(this.random(5, 10));
      this.goto(this.random(-220, 220), this.random(-160, 160));
      this.visible = true;
      yield* this.wait(this.random(3, 6));
      yield;
    }
  }

  *whenIReceiveStartNormal() {
    this.visible = false;
    this.size = 36;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Player1InGame"].y - this.y,
        this.sprites["Player1InGame"].x - this.x
      )
    );
    this.move(1);
    if (this.touching(this.sprites["Player1InGame"].andClones())) {
      this.visible = false;
    }
  }
}

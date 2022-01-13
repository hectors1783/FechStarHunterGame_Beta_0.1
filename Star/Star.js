/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("star", "./Star/costumes/star.svg", { x: 22, y: 23 })
    ];

    this.sounds = [
      new Sound("collect", "./Star/sounds/collect.wav"),
      new Sound("Pop", "./Star/sounds/Pop.wav"),
      new Sound("Video Game 1", "./Star/sounds/Video Game 1.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStartNormal() {
    this.stage.vars.score = 0;
    this.visible = true;
    while (true) {
      this.goto(this.random(-220, 220), this.random(-160, 160));
      while (
        !(
          this.touching(this.sprites["Player1InGame"].andClones()) ||
          this.touching(this.sprites["Player3inGame"].andClones()) ||
            this.touching(this.sprites["Player2InGame"].andClones())
        )
      ) {
        yield;
      }
      yield* this.playSoundUntilDone("Pop");
      this.stage.vars.score += 1;
      this.goto(this.random(-240, 240), this.random(-180, 180));
      if (this.stage.vars.score > this.stage.vars.Highscore) {
        this.stage.vars.Highscore = this.stage.vars.score;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

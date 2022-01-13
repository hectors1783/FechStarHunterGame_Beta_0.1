/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ChangeGameModeButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Normal", "./ChangeGameModeButton/costumes/Normal.svg", {
        x: 58.982,
        y: 29.212999999999994
      }),
      new Costume("tag", "./ChangeGameModeButton/costumes/tag.svg", {
        x: 58.98200000000003,
        y: 29.212999999999994
      }),
      new Costume("Race", "./ChangeGameModeButton/costumes/Race.svg", {
        x: 58.982000000000056,
        y: 29.212999999999994
      }),
      new Costume("Ultimate", "./ChangeGameModeButton/costumes/Ultimate.svg", {
        x: 58.982000000000085,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./ChangeGameModeButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "return to lobby" },
        this.whenIReceiveReturnToLobby
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "return to lobby" },
        this.whenIReceiveReturnToLobby2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.inGame = "n";
    this.stage.vars.gameMode = 1;
    this.costume = "Normal";
    this.visible = false;
  }

  *whenIReceiveReturnToLobby() {
    this.stage.vars.inGame = "n";
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(-18, 118);
    while (true) {
      if (this.stage.vars.gameMode == 1) {
        this.costume = "Normal";
      }
      if (this.stage.vars.gameMode == 2) {
        this.costume = "tag";
      }
      if (this.stage.vars.gameMode == 3) {
        this.costume = "Race";
      }
      if (this.stage.vars.gameMode == 4) {
        this.costume = "Ultimate";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.gameMode += 1;
    if (this.stage.vars.gameMode > 4) {
      this.stage.vars.gameMode = 1;
    }
    if (this.stage.vars.gameMode < 1) {
      this.stage.vars.gameMode = 4;
    }
  }

  *whenIReceiveReturnToLobby2() {
    while (true) {
      if (this.keyPressed("space")) {
        if (this.stage.vars.inGame == "n") {
          if (this.stage.vars.gameMode == 1) {
            this.broadcast("Start normal");
            this.visible = false;
            this.stage.vars.inGame = "y";
          }
          if (this.stage.vars.gameMode == 2) {
            this.broadcast("Start Tag");
            this.visible = false;
            this.stage.vars.inGame = "y";
          }
          if (this.stage.vars.gameMode == 3) {
            this.broadcast("Strat race");
            this.visible = false;
            this.stage.vars.inGame = "y";
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStartNormal() {
    /* TODO: Implement data_hidevariable */ null;
  }
}

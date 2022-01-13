/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Score extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume 1", "./Score/costumes/costume 1.svg", {
        x: 92.03746000925688,
        y: 246.3776041666664
      }),
      new Costume("costume1", "./Score/costumes/costume1.svg", {
        x: 62.04872669729937,
        y: 101.86098997833136
      }),
      new Costume("costume2", "./Score/costumes/costume2.svg", {
        x: 62.04872169729936,
        y: 101.86096497833134
      }),
      new Costume("costume3", "./Score/costumes/costume3.svg", {
        x: 62.048726697299344,
        y: 101.86096997833133
      }),
      new Costume("costume4", "./Score/costumes/costume4.svg", {
        x: 62.04872169729933,
        y: 101.86096497833131
      }),
      new Costume("costume5", "./Score/costumes/costume5.svg", {
        x: 62.048726697299315,
        y: 101.8609699783313
      }),
      new Costume("costume6", "./Score/costumes/costume6.svg", {
        x: 62.0487216972993,
        y: 101.86096497833128
      }),
      new Costume("costume7", "./Score/costumes/costume7.svg", {
        x: 62.04872669729929,
        y: 101.86096997833127
      }),
      new Costume("costume8", "./Score/costumes/costume8.svg", {
        x: 62.04872169729927,
        y: 101.86096497833125
      }),
      new Costume("costume9", "./Score/costumes/costume9.svg", {
        x: 62.04872669729926,
        y: 101.86096997833124
      }),
      new Costume("costume10", "./Score/costumes/costume10.svg", {
        x: 62.04872669729923,
        y: 101.86096997833121
      }),
      new Costume("costume11", "./Score/costumes/costume11.svg", {
        x: 62.048721697299214,
        y: 101.8609649783312
      }),
      new Costume("costume12", "./Score/costumes/costume12.svg", {
        x: 62.0487266972992,
        y: 101.86096997833118
      }),
      new Costume("costume13", "./Score/costumes/costume13.svg", {
        x: 62.048721697299186,
        y: 101.86096497833117
      }),
      new Costume("costume14", "./Score/costumes/costume14.svg", {
        x: 62.04872669729917,
        y: 101.86096997833116
      }),
      new Costume("costume15", "./Score/costumes/costume15.svg", {
        x: 62.04872169729916,
        y: 101.86096497833114
      }),
      new Costume("costume16", "./Score/costumes/costume16.svg", {
        x: 62.048726697299145,
        y: 101.86096997833113
      }),
      new Costume("costume17", "./Score/costumes/costume17.svg", {
        x: 62.04872169729913,
        y: 101.86096497833111
      }),
      new Costume("costume18", "./Score/costumes/costume18.svg", {
        x: 62.04872669729912,
        y: 101.8609699783311
      }),
      new Costume("costume19", "./Score/costumes/costume19.svg", {
        x: 62.0487216972991,
        y: 101.86096497833108
      }),
      new Costume("costume20", "./Score/costumes/costume20.svg", {
        x: 62.04872669729909,
        y: 101.86096997833107
      }),
      new Costume("costume21", "./Score/costumes/costume21.svg", {
        x: 62.04872169729907,
        y: 101.86096497833105
      }),
      new Costume("costume22", "./Score/costumes/costume22.svg", {
        x: 62.04872669729906,
        y: 101.86096997833104
      }),
      new Costume("costume23", "./Score/costumes/costume23.svg", {
        x: 62.048721697299044,
        y: 101.86096497833103
      }),
      new Costume("costume24", "./Score/costumes/costume24.svg", {
        x: 62.04872669729903,
        y: 101.86096997833101
      }),
      new Costume("costume25", "./Score/costumes/costume25.svg", {
        x: 62.048721697299015,
        y: 101.860964978331
      }),
      new Costume("costume26", "./Score/costumes/costume26.svg", {
        x: 62.048726697299,
        y: 101.86096997833098
      }),
      new Costume("costume27", "./Score/costumes/costume27.svg", {
        x: 62.04872169729899,
        y: 101.86096497833097
      }),
      new Costume("costume28", "./Score/costumes/costume28.svg", {
        x: 62.048726697298974,
        y: 101.86096997833096
      }),
      new Costume("costume29", "./Score/costumes/costume29.svg", {
        x: 62.04872169729896,
        y: 101.86096497833094
      }),
      new Costume("costume30", "./Score/costumes/costume30.svg", {
        x: 62.048726697298946,
        y: 101.86096997833093
      })
    ];

    this.sounds = [new Sound("pop", "./Score/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartNormal() {
    this.size = 25;
    this.visible = true;
    while (true) {
      this.costume = this.stage.vars.score + 1;
      if (this.costumeNumber == 31) {
        this.broadcast("win");
      }
      yield;
    }
  }
}

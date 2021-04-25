//========================================================
//library imports
//========================================================
import { getRandomNumber, WOClock } from "../../out/utility.js";
import { WOApp } from "../../out/wobject.js";
import {
  moveInCircle,
  moveInLine,
  accelerateInLine,
  stopAcceleration,
} from "/out/movements.js";
import { WOButton } from "../../out/buttons.js";
import { WOPosition } from "/out/basics.js";
import { WOImage, WOTextBox } from "../../out/index.js";
import { SpaceShip } from "./src/SpaceShip.js";
import { Shot } from "./src/Shot.js";
import { Astroid } from "./src/Asteroid.js";
import { MemoryAndCollisionsManager } from "./src/GameWobject.js";
import { ButtonsController } from "./src/buttonsController.js";
import { GameInfoBar } from "./src/GameInfoBar.js";
import { WOModal } from "../../out/modal.js";
//========================================================

import { collideMap, collideRectWithRect } from "../../out/collideMethods.js";
// this settings tell to collision system how to determent if those objects are collides
//e.g. : use the co
collideMap.set("Shot" + "Astroid", collideRectWithRect);
collideMap.set("SpaceShip" + "Astroid", collideRectWithRect);

//=================================================================================
/**
 * @class SpaceGameController
 * @param
 */
class SpaceGameController extends WOApp {
  constructor(canvasID, updateRate) {
    super(canvasID, updateRate);
    this.level = 0;
    this.score = 0;
    this.life = 5;
    this.shot = 100;
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
    this.gamePause = true;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.lifeClock = new WOClock(80);
    this.gameOn = true;
    this.infoBar = new GameInfoBar(10, 10, 100, 600, "Spacer");
    this.background = new WOImage(
      -20,
      -20,
      "./assets/spacebackground.jpg",
      this.width + 100,
      this.height + 100
    );

    this.spaceship = new SpaceShip(this.width / 4, this.height - 450, 100, 100);

    this.buttonsObj = WOButton.init(this.canvas); //init the WOButtons
    // const text = new WOTextBox(10, 30, 10, 10, "#000", "help text!", "");
    // this.helpModal = new WOModal(
    //   this.width,
    //   this.height,
    //   600,
    //   450,
    //   25,
    //   "#fff",
    //   text
    // );
    this.buttonsController = this.initButtons();
    this.memoManage = new MemoryAndCollisionsManager(
      50,
      50,
      this.width,
      this.height,
      "",
      50
    );
    this.memoManage.setCollisionManager(() => this.initCollideMap());
    this.background.setMotionMethod(moveInCircle(0.41, 0.04));
    this.memoManage.addElement(this.spaceship);
    this.addElement(this.background);
    this.addElement(this.lifeClock);
    this.addElement(this.memoManage);
    this.addElement(this.buttonsObj);
    this.addElement(this.infoBar);
    //  this.addElement(this.helpModal);

    this.run();
    this.fillAsteroids(this.level * 10);
  }

  //=================================================================================
  update() {
    this.infoBar.setText(this.level, this.score, this.life, this.shot);

    super.update();

    if (!this.gameOn) return;
    if (this.life === 0) {
      this.addElement(
        new WOTextBox(
          this.width / 2 - 300,
          this.height / 2,
          1,
          1,
          "#fff",
          "Game Over",
          "80px"
        )
      );
      this.gameOn = false;
      return;
    }

    if (
      this.memoManage.isFrameInside(this.spaceship.frame) &&
      this.memoManage.rectObjInsideFrame().length === 1 //only the spaceship is inside screen...
    ) {
      this.nextLevel();
    }
  }

  //=================================================================================
  startOver() {
    this.memoManage.clear();
    this.level = 0;
    this.shot = this.level * 10;
    this.fillAsteroids((this.level + 1) * 10);
    this.lifeClock.restart();
  }

  //=================================================================================
  nextLevel() {
    this.memoManage.clear();
    this.memoManage.addElement(this.spaceship);
    this.level += 1;
    this.shot += this.level * 50;
    this.fillAsteroids((this.level + 1) * 10);
    this.lifeClock.restart();
  }

  //=================================================================================
  fillAsteroids(num) {
    for (let i = 0; i < num; i++) {
      const y = getRandomNumber(0, this.height - 400);
      const x = getRandomNumber(0, this.width - 400);
      const size = getRandomNumber(50, 100);
      const astro = new Astroid(x + 50, y + 60, size, size, true);
      astro.setMotionMethod(
        moveInLine(getRandomNumber(-5, 5), getRandomNumber(-5, 5))
      );
      this.memoManage.addElement(astro);
    }
  }
  //=================================================================================
  initButtons() {
    const actionFire = () => {
      if (this.gameOn && this.shot > 0) {
        const pos = this.spaceship.position;
        const spaceWidth = this.spaceship.size.width;
        const spaceH = this.spaceship.size.height;
        this.shot -= 1;
        const shot = new Shot(
          pos.x - spaceWidth / 4,
          pos.y - spaceH + 20,
          50,
          50,
          true
        );
        shot.setMotionMethod(accelerateInLine(0, -2));
        this.memoManage.addElement(shot);
      }
    };

    WOButton.add(20, this.height - 200, 60, 60, "#343434", "", actionFire);
    const factor = 0.7,
      maxAccel = 15;
    return new ButtonsController(
      this.width - 200,
      this.height - 200,
      60,
      WOButton,
      () => {
        this.gameOn &&
          this.spaceship.setMotionMethod(
            accelerateInLine(0, -factor, maxAccel)
          );
      },
      () => {
        this.gameOn &&
          this.spaceship.setMotionMethod(accelerateInLine(factor, 0, maxAccel));
      },
      () => {
        this.gameOn &&
          this.spaceship.setMotionMethod(accelerateInLine(0, factor, maxAccel));
      },
      () => {
        this.gameOn &&
          this.spaceship.setMotionMethod(
            accelerateInLine(-factor, 0, maxAccel)
          );
      },
      () => {
        this.gameOn &&
          this.spaceship.setMotionMethod(
            stopAcceleration(factor, factor, maxAccel)
          );
      },
      actionFire
    );
  }

  //=================================================================================
  initCollideMap() {
    const actionMap = new Map();
    //define the rules- what happening when two are collides
    //Shot - Astroid
    actionMap.set("ShotAstroid", (shot, astroid) => {
      shot.setTimeToLeave();
      astroid.explode();
      this.score += 1;
    });
    //SpaceShip Astroid
    actionMap.set("SpaceShipAstroid", (spaceship, astroid) => {
      astroid.explode();
      if (this.lifeClock.isTime()) {
        if (this.life === 0) this.gameOn = false;
        else this.life -= 1;
        this.lifeClock.restart();
      }
    });

    return actionMap;
  }
  //=================================================================================
  start() {
    this.wobjectApp.run();
  }
}

new SpaceGameController("myCanvas", 40);

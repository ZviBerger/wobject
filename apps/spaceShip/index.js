//========================================================
//library imports
//========================================================
import {
  getRandomColor,
  getRandomPosition,
  getRandomNumber,
  WOClock,
} from "/out/utility.js";
import { WOApp } from "/out/wobject.js";
import { WORect, WOCircle } from "/out/shapes.js";
import { moveInCircle, moveInLine, accelerateInLine } from "/out/movements.js";
import { WOContainer } from "/out/containers.js";
import { WOButton } from "/out/buttons.js";
import { WOCollidersContainer } from "/out/colliders.js";
import { WOTextBox } from "/out/text.js";
import { WObject, WOImage } from "../../out/index.js";
import { SpaceShip } from "./src/SpaceShip.js";
import { Explosion } from "./src/Explosion.js";
import { Shot } from "./src/Shot.js";
import { Astroid } from "./src/Asteroid.js";
import { MemoryAndCollisionsManager } from "./src/GameWobject.js";
import { ButtonsController } from "./src/buttonsController.js";
import { GameInfoBar } from "./src/GameInfoBar.js";
//========================================================

import { collideMap, collideRectWithRect } from "/out/collideMethods.js";
// this settings tell to collision system how to determent if those objects are collides
//e.g. : use the co
collideMap.set("Shot" + "Astroid", collideRectWithRect);
collideMap.set("SpaceShip" + "Astroid", collideRectWithRect);
//============================================================
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
    this.shot = 50;
    this.width = window.innerWidth - 20;
    this.height = window.innerHeight - 20;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.lifeClock = new WOClock(40);
    this.gameOn = true;

    this.infoBar = new GameInfoBar(10, 10, 100, 600, "Spacer");

    this.background = new WOImage(
      -20,
      -20,
      "https://i.pinimg.com/originals/85/9f/a9/859fa9f580f5130eea47680160ef704e.jpg",
      this.width + 100,
      this.height + 100
    );

    this.spaceship = new SpaceShip(this.width / 4, this.height - 450, 100, 100);

    this.buttonsObj = WOButton.init(this.canvas); //init the WOButtons
    this.buttonsController = this.initButtons();
    this.memoManage = new MemoryAndCollisionsManager(
      0,
      0,
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

    this.run();
    this.fillAsteroids(this.level * 10);
    console.log(this.elements);
  }

  update() {
    this.infoBar.setText(this.level, this.score, this.life, this.shot);
    super.update();
    if (this.life === 0) {
      this.gameOn = false;
      return;
    }
    if (this.memoManage.rectObjInsideFrame().length === 1) {
      this.nextLevel();
    }
    console.log(this.lifeClock);
  }
  startOver() {
    this.level = 0;
    this.shot = this.level * 10;
    this.fillAsteroids(this.shot);
  }

  nextLevel() {
    this.level += 1;
    this.shot = this.level * 10;
    this.fillAsteroids(this.shot);
  }

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
  initButtons() {
    return new ButtonsController(
      this.width - 120,
      this.height - 100,
      30,
      WOButton,
      () => {
        this.gameOn && this.spaceship.setMotionMethod(moveInLine(0, -10));
      },
      () => {
        this.gameOn && this.spaceship.setMotionMethod(moveInLine(10, 0));
      },
      () => {
        this.gameOn && this.spaceship.setMotionMethod(moveInLine(0, 10));
      },
      () => {
        this.gameOn && this.spaceship.setMotionMethod(moveInLine(-10, 0));
      },
      () => {
        if (this.gameOn && this.shot > 0) {
          const pos = this.spaceship.position;
          const spaceWidth = this.spaceship.size.width;
          this.shot -= 1;
          const shot = new Shot(pos.x + spaceWidth / 2, pos.y, 50, 50, true);
          shot.setMotionMethod(accelerateInLine(0, -2));
          this.memoManage.addElement(shot);
        }
      }
    );
  }

  initCollideMap() {
    const actionMap = new Map();
    //define the rules- what happening when to are collides
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

  start() {
    this.wobjectApp.run();
  }
}

new SpaceGameController("myCanvas", 40);

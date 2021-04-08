//========================================================
//library imports
//========================================================
import { getRandomColor, getRandomPosition } from "/out/utility.js";
import { WOApp } from "/out/wobject.js";
import { WORect, WOCircle } from "/out/shapes.js";
import { moveInCircle, moveInLine } from "/out/movements.js";
import { WOContainer } from "/out/containers.js";
import { WOButton } from "/out/buttons.js";
import { WOCollidersContainer } from "/out/colliders.js";
import { WOTextBox } from "/out/text.js";

//========================================================
//game imports
//========================================================
import { ButtonsController } from "./src/buttonsController.js";
import { Direction2Move } from "./src/directions.js";
import { Snake } from "./src/snake.js";
import "./src/CollisionDefinition.js";

//========================================================
const app = new WOApp("myCanvas", 100);

const direction2Move = new Direction2Move(50, 50);
const bigContainer = new WOContainer(0, 0, 2000, 1100, getRandomColor());
const food = new WORect(600, 600, 50, 50, getRandomColor());
food.setMotionMethod(moveInCircle(10.05, 10.054));

const snake = new Snake(300, 300, 50, 50, "#000000", direction2Move);
let score = 0;
const gameTitle = "SNAKE GAME  | Your Score: ";
const textBoxDashboard = new WOTextBox(
  100,
  100,
  300,
  100,
  "White",
  gameTitle + score,
  "40px"
);
//=============================================================
//for actions that triggered when they collide
const actionMap = new Map();
actionMap.set("SnakeWORect", () => {
  //Snake is Collide with WoRect(the food)
  snake.add(food.color);
  food.setPosition(getRandomPosition(50, 2000, 50, 1000));
  food.color = getRandomColor();
  score += 1;
  textBoxDashboard.setText(gameTitle + score);
});
//==============================================================
const collider = new WOCollidersContainer(
  100,
  100,
  300,
  300,
  getRandomColor(),
  90, //rate check (each n ms collision will be check automatically)
  () => actionMap
);

collider.addElementNotAdopt(food);
collider.addElementNotAdopt(snake);

//==============================================================

const ButtonsObj = WOButton.init(app.canvas);
const buttonsController = new ButtonsController(
  1700,
  900,
  80,
  WOButton,
  () => {
    direction2Move.setUP();
    snake.move(direction2Move);
  },
  () => {
    direction2Move.setRIGHT();
    snake.move(direction2Move);
  },
  () => {
    direction2Move.setDOWN();
    snake.move(direction2Move);
  },
  () => {
    direction2Move.setLEFT();
    snake.move(direction2Move);
  }
);

bigContainer.addElement(collider);
bigContainer.addElement(ButtonsObj);
bigContainer.addElement(textBoxDashboard);
app.addElement(bigContainer);
app.run();

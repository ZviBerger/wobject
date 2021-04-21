import { getRandomColor, getRandomNumber } from "./out/utility.js";
import { WObject } from "./out/engine.js";
import { WOApp } from "./out/wobject.js";
import { WORect, WOCircle } from "./out/shapes.js";
import { moveInCircle, moveInLine } from "./out/movements.js";
import {
  WOHorizontalContainer,
  WOVerticalContainer,
} from "./out/containers.js";
import { WOButton } from "./out/buttons.js";
import { WOCollidersContainer } from "./out/colliders.js";
import { WOImage } from "./out/image.js";
let width = 2000;
let app = new WOApp("myCanvas", 50);

let bigContainer = new WOHorizontalContainer(10, 10, 1500, 130, "White");
bigContainer.setMargin(50, 15, 0, 0);

let container = new WOHorizontalContainer(0, 0, 600, 80, "White");
let container1 = new WOHorizontalContainer(0, 0, 600, 80, "White");
bigContainer.addElement(container);
bigContainer.addElement(container1);

container.setMargin(40, 5, 0, 0);
let el = new WORect(0, 0, 50, 50, getRandomColor());
el.setMotionMethod(moveInCircle(0.5, 0.04));
container.addElement(el);

let lineMovingObj = new WORect(0, 0, 50, 50, getRandomColor());
lineMovingObj.setMotionMethod(moveInLine(0.3, 0.3));
//container.addElement(lineMovingObj);
container.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container.addElement(new WORect(0, 0, 60, 50, getRandomColor()));
container.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container.addElement(new WORect(0, 0, 50, 50, getRandomColor()));

container1.setMargin(40, 5, 0, 0);
container1.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WORect(0, 0, 50, 50, getRandomColor()));
//container1.addElement(new WObject(0,0,50,50,getRandomColor()));

let root2 = new WORect(10, 320, 300, 300, getRandomColor());
let box1 = new WORect(0, 0, 255, 255, getRandomColor());
box1.setMargin(10, 20, 0, 0);
let box2 = new WORect(0, 0, 230, 230, getRandomColor());
box2.setMargin(10, 20, 0, 0);
let box3 = new WORect(0, 0, 200, 200, getRandomColor());
box3.setMargin(10, 20, 0, 0);
let box4 = new WORect(0, 0, 150, 150, getRandomColor());
box4.setMargin(10, 20, 0, 0);

root2.addElement(box1);
box1.addElement(box2);
box2.addElement(box3);
box3.addElement(box4);

let root3 = new WORect(0, 310, 300, 300, getRandomColor());

//app.addElement(root);
//app.addElement(container1);
let verticalContainer = new WOVerticalContainer(10, 250, 80, 600);
verticalContainer.setMargin(5, 30, 3, 3);
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WORect(5, 0, 50, 50, getRandomColor()));
app.addElement(bigContainer);
app.addElement(verticalContainer);
let circ = new WOCircle(100, 100, 60, getRandomColor());
circ.setMotionMethod(moveInLine(0.2, 0.3));
let collider = new WOCollidersContainer(
  100,
  100,
  300,
  300,
  getRandomColor(),
  "200",
  () => new Map()
);
collider.addElement(circ);
collider.addElement(lineMovingObj);
collider.addElement(el);

collider.addElement(new WOButton(400, 400, 20, 20, getRandomColor()));

const ButtonsObj = WOButton.init(app.canvas);
WOButton.add(600, 400, 220, 40, getRandomColor(), "Snake Game!", () => {
  console.log("A clicked");
  window.location.href = "/apps/snakeGame/";
});
let rad = circ.radius;
WOButton.add(450, 450, 230, 40, getRandomColor(), "Change color", () => {
  circ.color = getRandomColor();
  rad += 3;
});
for (let i = 0; i < 10; i++) {
  const img = new WOImage(
    200 + i * i * 10,
    200 + i * 10 + (i % 2) * 60,
    "http://clipart-library.com/image_gallery/401221.png",
    150,
    150
    //  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  );
  img.setMotionMethod(moveInCircle(2, 0.2));
  const img1 = new Image();
  img1.src = "http://clipart-library.com/image_gallery/401221.png";
  console.log(img1.width);
  app.addElement(img);
}
//img.setSlice(20, 30, 100, 100);
app.addElement(collider);
app.addElement(ButtonsObj);
app.run();

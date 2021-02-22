import { getRandomColor } from "./out/utility.js";
import { WObject } from "./out/engine.js";
import { WOApp } from "./out/wobject.js";
import { WORect, WOCircle } from "./out/shapes.js";
import { moveInCircle, moveInLine } from "./out/movements.js";
import {
  WOHorizontalContainer,
  WOVerticalContainer,
} from "./out/containers.js";
import { WOCollidersContainer } from "./out/colliders.js";
class TextBox extends WObject {
  constructor(x, y, w, h, color, text) {
    super(x, y, w, h, color);
    this.text = text;
  }
  setText(text) {
    this.text = text;
  }
  display(context) {
    context.fillText(this.text, this.position.x, this.position.y);
  }
}

let width = 2000;
let app = new WOApp("myCanvas", 100);
/*
let root  = new WObject(10,10,300,300,getRandomColor());
root.addElement(new WObject(30,15,30,30,"green"));
root.addElement(new WObject(60,15,30,30,"yellow"));
root.addElement(new WObject(90,15,30,30,"black"));
root.addElement(new WObject(120,15,30,30,"red"));
root.addElement(new TextBox(0,10,100,100,"white","This is The Box!"));
*/

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
//app.addElement(circ);
let collider = new WOCollidersContainer(100, 100, 300, 300, getRandomColor());
//collider.addElement(circ);
collider.addElement(lineMovingObj);
collider.addElement(el);
app.addElement(collider);
app.run();

import { getRandomColor } from "./utility.js";
import { WObject } from "./engine.js";
import { WOApp } from "./wobject.js";
import { WOMotion } from "./basics.js";
import { WOHorizontalContainer, WOVerticalContainer } from "./containers.js";

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
let app = new WOApp("myCanvas", 10);
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
let el = new WObject(0, 0, 50, 50, getRandomColor());

/*
 X := originX + cos(angle)*radius;
 Y := originY + sin(angle)*radius;
*/
let motion = new WOMotion();
motion.set(0, 0);
motion.setRadius(20);
el.setMotion(motion);
el.setMotionMethod((mo) => {
  (mo.dX = Math.cos(mo.angel) * 1), (mo.dY = Math.sin(mo.angel) * 1);
  mo.angel += 0.04;
  return mo;
});
container.addElement(el);
container.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container.addElement(new WObject(0, 0, 60, 50, getRandomColor()));
container.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
//container.addElement(new WObject(0,0,50,50,getRandomColor()));

container1.setMargin(40, 5, 0, 0);
container1.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
container1.addElement(new WObject(0, 0, 50, 50, getRandomColor()));
//container1.addElement(new WObject(0,0,50,50,getRandomColor()));

let root2 = new WObject(10, 320, 300, 300, getRandomColor());
let box1 = new WObject(0, 0, 255, 255, getRandomColor());
box1.setMargin(10, 20, 0, 0);
let box2 = new WObject(0, 0, 230, 230, getRandomColor());
box2.setMargin(10, 20, 0, 0);
let box3 = new WObject(0, 0, 200, 200, getRandomColor());
box3.setMargin(10, 20, 0, 0);
let box4 = new WObject(0, 0, 150, 150, getRandomColor());
box4.setMargin(10, 20, 0, 0);

root2.addElement(box1);
box1.addElement(box2);
box2.addElement(box3);
box3.addElement(box4);

let root3 = new WObject(0, 310, 300, 300, getRandomColor());

//app.addElement(root);
//app.addElement(container1);
let verticalContainer = new WOVerticalContainer(10, 250, 80, 600);
verticalContainer.setMargin(5, 30, 3, 3);
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
verticalContainer.addElement(new WObject(5, 0, 50, 50, getRandomColor()));
app.addElement(bigContainer);
app.addElement(verticalContainer);
app.run();

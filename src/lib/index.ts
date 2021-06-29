export * from "./wobject";
export * from "./engine";
export * from "./animation";
export * from "./basics";
export * from "./buttons";
export * from "./collideMethods";
export * from "./colliders";
export * from "./containers";
export * from "./movements";
export * from "./shapes";
export * from "./text";
export * from "./utility";
export * from "./image";

import * as Anim from "./animation";
import * as Basics from "./basics";
import * as Buttons from "./buttons";
import * as CollideMethods from "./collideMethods";
import * as Colliders from "./colliders";
import * as Containers from "./containers";
import * as Engine from "./engine";
import * as Movements from "./movements";
import * as Shapes from "./shapes";
import * as Text from "./text";
import * as Utils from "./utility";
import * as Wobject from "./wobject";
import * as Img from "./image";

const WO = {
  Anim: Anim,
  Basics: Basics,
  Buttons: Buttons,
  CollideMethods: CollideMethods,
  Colliders: Colliders,
  Containers: Containers,
  Engine: Engine,
  Movements: Movements,
  Shapes: Shapes,
  Text: Text,
  Utils: Utils,
  Wobject: Wobject,
  Img: Img,
};

export default WO;


export * from "./animation.js";
export * from "./basics.js";
export * from "./buttons.js";
export * from "./collideMethods.js";
export * from "./colliders.js";
export * from "./containers.js";
export * from "./engine.js";
export * from "./movements.js";
export * from "./shapes.js";
export * from "./text.js";
export * from "./utility.js";
export * from "./wobject.js";
export * from "./image.js";


import  * as Anim from "./animation.js";
import  * as Basics from "./basics.js";
import  * as Buttons from   "./buttons.js";
import  * as CollideMethods from "./collideMethods.js";
import  * as Colliders from "./colliders.js";
import  * as Containers from "./containers.js";
import  * as Engine from "./engine.js";
import  * as Movements from "./movements.js";
import  * as Shapes  from "./shapes.js";
import  * as Text from "./text.js";
import  * as Utils from "./utility.js";
import  * as Wobject from "./wobject.js";
import  * as Img from "./image.js";

const WO = {
    Anim : Anim,
    Basics           : Basics,
    Buttons          : Buttons,   
    CollideMethods   : CollideMethods,
    Colliders        : Colliders,
    Containers       : Containers,
    Engine           : Engine,
    Movements        : Movements,
    Shapes           : Shapes,    
    Text             : Text,
    Utils            : Utils,
    Wobject          : Wobject,
    Img              : Img, 
 
}

export default WO;

import { WObject } from "./engine.js";
import { WOPairString } from "./basics.js";
import { isCollide } from "./collideMethods.js";
type Action = (obj1?: WObject, obj2?: WObject) => void;
type ActionMapBuilder = () => Map<WOPairString, Action>;
const voidAction: Action = () => {};

interface Collider {
  checkCollide(): void;
}

export class CollisionManager {
  collideMap: Map<WOPairString, Action>;
  constructor(initialCollideMap: ActionMapBuilder) {
    this.collideMap = initialCollideMap();
  }
  lookup(classes: WOPairString): Action {
    return this.collideMap.get(classes) ?? voidAction;
  }
}

export class WOCollidersContainer extends WObject implements Collider {
  collusionManager: CollisionManager;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string
    // initCollideMap: ActionMapBuilder
  ) {
    super(x, y, w, h, color);
    //this.collusionManager = new CollisionManager(initCollideMap);
    setInterval(() => {
      this.checkCollide();
    }, 1000);
  }
  checkCollide(): void {
    this.elements.forEach((wo1) => {
      this.elements.forEach((wo2) => {
        if (wo1 != wo2 && isCollide(wo1, wo2)) {
          console.log("Colliding!");
        }
      });
    });
  }
}

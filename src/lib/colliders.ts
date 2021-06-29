import { WObject } from "./engine";
import { isCollide, collideFrames } from "./collideMethods";
import { WOFrame } from "./basics";
import { WORect } from "./shapes";

type Action = (obj1: WObject, obj2: WObject) => void;

type ActionMapBuilder = () => Map<string, Action>;

const voidAction: Action = () => {};

interface Collider {
  checkCollide(): void;
}

export class CollisionManager {
  collideMap: Map<string, Action>;
  constructor(initialCollideMap: ActionMapBuilder) {
    this.collideMap = initialCollideMap();
  }
  lookup(classes: string): Action {
    return this.collideMap.get(classes) ?? voidAction;
  }
  runActivity(wo1: WObject, wo2: WObject): void {
    this.lookup(wo1.wobjName + wo2.wobjName)(wo1, wo2);
  }
}

export class WOCollidersContainer extends WObject implements Collider {
  collisionManager: CollisionManager;
  rateCheck: number;
  intervalID: number;
  frame: WOFrame;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    rateCheck: number,
    initCollideMap?: ActionMapBuilder
  ) {
    super(x, y, w, h, color);
    this.rateCheck = rateCheck;
    this.intervalID = 0;
    this.frame = new WOFrame(x, y, w, h);
    if (initCollideMap) this.setCollisionManager(initCollideMap);
  }

  setCollisionManager(initCollideMap: ActionMapBuilder) {
    this.collisionManager = new CollisionManager(initCollideMap);
  }

  rectObjInsideFrame(): Array<WObject> {
    return this.elements.filter((wbj: WORect) =>
      collideFrames(this.frame, wbj.frame)
    );
  }

  isFrameInside(frame: WOFrame): boolean {
    return collideFrames(this.frame, frame);
  }

  update() {
    this.checkCollide();
    super.update();
  }
  /**
   * @method checkCollide run each time (rateCheck)
   * and for each two different object if they collide
   * (according to the methods defined in the collideMap of collideMethods)
   * run specific activity that pre defined in initCollideMap
   */
  checkCollide(): void {
    this.elements.forEach((wo1) => {
      this.elements.forEach((wo2) => {
        if (wo1 !== wo2 && isCollide(wo1, wo2)) {
          this.collisionManager.runActivity(wo1, wo2);
        }
      });
    });
  }
}

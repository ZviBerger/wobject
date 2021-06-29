import { WObject } from "./engine";
import { WOFrame } from "./basics";
declare type Action = (obj1: WObject, obj2: WObject) => void;
declare type ActionMapBuilder = () => Map<string, Action>;
interface Collider {
    checkCollide(): void;
}
export declare class CollisionManager {
    collideMap: Map<string, Action>;
    constructor(initialCollideMap: ActionMapBuilder);
    lookup(classes: string): Action;
    runActivity(wo1: WObject, wo2: WObject): void;
}
export declare class WOCollidersContainer extends WObject implements Collider {
    collisionManager: CollisionManager;
    rateCheck: number;
    intervalID: number;
    frame: WOFrame;
    constructor(x: number, y: number, w: number, h: number, color: string, rateCheck: number, initCollideMap?: ActionMapBuilder);
    setCollisionManager(initCollideMap: ActionMapBuilder): void;
    rectObjInsideFrame(): Array<WObject>;
    isFrameInside(frame: WOFrame): boolean;
    update(): void;
    /**
     * @method checkCollide run each time (rateCheck)
     * and for each two different object if they collide
     * (according to the methods defined in the collideMap of collideMethods)
     * run specific activity that pre defined in initCollideMap
     */
    checkCollide(): void;
}
export {};

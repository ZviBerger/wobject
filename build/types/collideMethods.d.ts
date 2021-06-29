import { WOCircle, WORect } from "./shapes";
import { WObject } from "./engine";
import { WOFrame } from "./basics";
/**
 * @module collideMethods - this module is for settings the object
 * with the right collision methods.
 * This definition is determine if those given two object are actually colliding.
 * In order to set the action that triggered when they collide use the
 * @module colliders where all actions are defined.
 */
declare type CollideMethod = (obj1?: WObject, obj2?: WObject) => boolean;
/***************************************************************
 * @function collideCircleWithCircle
 * @param cir1
 * @param cir2
 * @returns true if they are colliding
 */
export declare const collideCircleWithCircle: CollideMethod;
/***************************************************************
 * @function collideRectWithRect
 * @param rec1
 * @param rec2
 * @returns true if they are colliding
 */
export declare const collideRectWithRect: CollideMethod;
/***************************************************************
 * @function collideFrames
 * @param frame1
 * @param frame2
 * @returns true if they are colliding
 */
export declare const collideFrames: (f1: WOFrame, f2: WOFrame) => boolean;
/***************************************************************
 * @function collideRectWithCircle
 * @param rect
 * @param circle
 * @returns true if they are colliding
 */
export declare const collideRectWithCircle: CollideMethod;
/***************************************************************
 * @function collideCircleWithRect
 * @param circle
 * @param rect
 * @returns true if they are colliding
 */
export declare const collideCircleWithRect: (circle: WOCircle, rect: WORect) => boolean;
/***************************************************************
 * @constant collideMap will contain all collision methods. according to
 * the objects names (WObject1WObject2) both concatenated without space
 * it will decide how to determine if the shapes collides.
 * this module is including a basic 4 methods for 2 objects type: circle and rectangle.
 * @import collideMap and add new collide methods as your wish.
 */
export declare const collideMap: Map<string, CollideMethod>;
/***************************************************************
 * @function isCollide
 * @param obj1 WObject1
 * @param obj2 WObject2
 * @returns true if they are colliding
 */
export declare const isCollide: (obj1: WObject, obj2: WObject) => boolean;
export {};

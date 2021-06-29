import { WOMotion } from "./basics";
/**
 * ========================================================================
 * @function moveInCircle
 * @param radius
 * @param angel
 * @returns
 */
export declare const moveInCircle: (radius: number, angel: number) => (mo: WOMotion) => WOMotion;
/**
 * ========================================================================
 * @function moveInLine
 * @param dx
 * @param dy
 * @returns
 */
export declare const moveInLine: (dx: number, dy: number) => (mo: WOMotion) => WOMotion;
/**
 * ========================================================================
 * @function accelerateInLine
 * @param ax
 * @param ay
 * @param maxA
 * @returns update motion
 */
export declare const accelerateInLine: (ax: number, ay: number, maxA: number) => (mo: WOMotion) => WOMotion;
/**
 * ========================================================================
 * @function stopAcceleration
 * @param x
 * @param y
 * @returns closure function that will calculate the motion in ech call
 */
export declare const stopAcceleration: (x: number, y: number) => (mo: WOMotion) => WOMotion;

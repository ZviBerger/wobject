import { WOMotion } from "./basics";
/**
 * ========================================================================
 * @function moveInCircle
 * @param radius
 * @param angel
 * @returns
 */
export const moveInCircle =
  (radius: number, angel: number) => (mo: WOMotion) => {
    mo.angel += angel;
    mo.dX = Math.cos(mo.angel) * radius;
    mo.dY = Math.sin(mo.angel) * radius;
    return mo;
  };

/**
 * ========================================================================
 * @function moveInLine
 * @param dx
 * @param dy
 * @returns
 */
export const moveInLine = (dx: number, dy: number) => (mo: WOMotion) => {
  mo.dX = dx;
  mo.dY = dy;
  return mo;
};

/**
 * ========================================================================
 * @function accelerateInLine
 * @param ax
 * @param ay
 * @param maxA
 * @returns update motion
 */
export const accelerateInLine =
  (ax: number, ay: number, maxA: number) => (mo: WOMotion) => {
    mo.dX += Math.abs(mo.dX + ax) > maxA ? 0 : ax;
    mo.dY += Math.abs(mo.dY + ay) > maxA ? 0 : ay;
    return mo;
  };
/**
 * ========================================================================
 * @function stopAcceleration
 * @param x
 * @param y
 * @returns closure function that will calculate the motion in ech call
 */
export const stopAcceleration = (x: number, y: number) => (mo: WOMotion) => {
  mo.dX = mo.dX - x > 0 ? mo.dX - x : mo.dX - x < 0 ? mo.dX + x : 0;
  mo.dY = mo.dY - y > 0 ? mo.dY - y : mo.dY - y < 0 ? mo.dY + y : 0;
  return mo;
};

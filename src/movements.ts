import { WOMotion } from "./basics.js";

export const moveInCircle = (radius: number, angel: number) => (
  mo: WOMotion
) => {
  mo.angel += angel;
  (mo.dX = Math.cos(mo.angel) * radius), (mo.dY = Math.sin(mo.angel) * radius);
  return mo;
};

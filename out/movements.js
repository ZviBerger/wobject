export const moveInCircle = (radius, angel) => (mo) => {
    mo.angel += angel;
    mo.dX = Math.cos(mo.angel) * radius;
    mo.dY = Math.sin(mo.angel) * radius;
    return mo;
};
export const moveInLine = (x, y) => (mo) => {
    mo.dX = x;
    mo.dY = y;
    return mo;
};
//# sourceMappingURL=movements.js.map
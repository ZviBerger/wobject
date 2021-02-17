export const moveInCircle = (radius, angel) => (mo) => {
    mo.angel += angel;
    (mo.dX = Math.cos(mo.angel) * radius), (mo.dY = Math.sin(mo.angel) * radius);
    return mo;
};
//# sourceMappingURL=movements.js.map
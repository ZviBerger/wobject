/***************************************************************
 * @function collideCircleWithCircle
 * @param cir1
 * @param cir2
 * @returns true if they are colliding
 */
export const collideCircleWithCircle = (cir1, cir2) => {
    const xd = cir1.position.x - cir2.position.x;
    const yd = cir1.position.y - cir2.position.y;
    const sumRadius = cir1.radius + cir2.radius;
    const sqrRadius = sumRadius * sumRadius;
    const distSqr = xd * xd + yd * yd;
    return distSqr <= sqrRadius;
};
/***************************************************************
 * @function collideRectWithRect
 * @param rec1
 * @param rec2
 * @returns true if they are colliding
 */
export const collideRectWithRect = (rec1, rec2) => {
    const R1 = rec1.frame;
    const R2 = rec2.frame;
    return (R1.topLeft.x < R2.bottomRight.x &&
        R1.bottomRight.x > R2.topLeft.x &&
        R1.topLeft.y < R2.bottomRight.y &&
        R1.bottomRight.y > R2.topLeft.y);
};
/***************************************************************
 * @function collideFrames
 * @param frame1
 * @param frame2
 * @returns true if they are colliding
 */
export const collideFrames = (f1, f2) => {
    return (f1.topLeft.x < f2.bottomRight.x &&
        f1.bottomRight.x > f2.topLeft.x &&
        f1.topLeft.y < f2.bottomRight.y &&
        f1.bottomRight.y > f2.topLeft.y);
};
/***************************************************************
 * @function collideRectWithCircle
 * @param rect
 * @param circle
 * @returns true if they are colliding
 */
export const collideRectWithCircle = (rect, circle) => {
    const circleDistanceX = Math.abs(circle.position.x - rect.position.x);
    const circleDistanceY = Math.abs(circle.position.y - rect.position.y);
    if (circleDistanceX > rect.size.width / 2 + circle.radius) {
        return false;
    }
    if (circleDistanceY > rect.size.height / 2 + circle.radius) {
        return false;
    }
    if (circleDistanceX <= rect.size.width / 2) {
        return true;
    }
    if (circleDistanceY <= rect.size.height / 2) {
        return true;
    }
    const cornerDistance_sq = Math.pow(circleDistanceX - rect.size.width / 2, 2) +
        Math.pow(circleDistanceY - rect.size.height / 2, 2);
    return cornerDistance_sq <= circle.radius * circle.radius;
};
/***************************************************************
 * @function collideCircleWithRect
 * @param circle
 * @param rect
 * @returns true if they are colliding
 */
export const collideCircleWithRect = (circle, rect) => {
    return collideRectWithCircle(rect, circle);
};
/***************************************************************
 * @constant collideMap will contain all collision methods. according to
 * the objects names (WObject1WObject2) both concatenated without space
 * it will decide how to determine if the shapes collides.
 * this module is including a basic 4 methods for 2 objects type: circle and rectangle.
 * @import collideMap and add new collide methods as your wish.
 */
export const collideMap = new Map();
/***************************************************************
 * @Set the basic collision options
 */
collideMap.set("WOCircle" + "WOCircle", collideCircleWithCircle);
collideMap.set("WORect" + "WOCircle", collideRectWithCircle);
collideMap.set("WOCircle" + "WORect", collideCircleWithRect);
collideMap.set("WORect" + "WORect", collideRectWithRect);
/***************************************************************
 * @function isCollide
 * @param obj1 WObject1
 * @param obj2 WObject2
 * @returns true if they are colliding
 */
export const isCollide = (obj1, obj2) => {
    const cm = collideMap.get(obj1.wobjName + obj2.wobjName);
    return cm && cm(obj1, obj2);
};
//# sourceMappingURL=collideMethods.js.map
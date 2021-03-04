const collideCircleWithCircle = (cir1, cir2) => {
    let xd = cir1.position.x - cir2.position.x;
    let yd = cir1.position.y - cir2.position.y;
    let sumRadius = cir1.radius + cir2.radius;
    let sqrRadius = sumRadius * sumRadius;
    let distSqr = xd * xd + yd * yd;
    return distSqr <= sqrRadius;
};
const collideRectWithRect = (rec1, rec2) => {
    let R1 = rec1.frame, R2 = rec2.frame;
    return (R1.topLeft.x < R2.bottomRight.x &&
        R1.bottomRight.x > R2.topLeft.x &&
        R1.topLeft.y < R2.bottomRight.y &&
        R1.bottomRight.y > R2.topLeft.y);
};
const collideRectWithCircle = (rect, circle) => {
    let circleDistanceX = Math.abs(circle.position.x - rect.position.x);
    let circleDistanceY = Math.abs(circle.position.y - rect.position.y);
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
    let cornerDistance_sq = Math.pow(circleDistanceX - rect.size.width / 2, 2) +
        Math.pow(circleDistanceY - rect.size.height / 2, 2);
    return cornerDistance_sq <= circle.radius * circle.radius;
};
const collideCircleWithRect = (circle, rect) => {
    return collideRectWithCircle(rect, circle);
};
const collide = new Map();
collide.set("WOCircle" + "WOCircle", collideCircleWithCircle);
collide.set("WORect" + "WOCircle", collideRectWithCircle);
collide.set("WOCircle" + "WORect", collideCircleWithRect);
collide.set("WORect" + "WORect", collideRectWithRect);
export const isCollide = (obj1, obj2) => {
    const cm = collide.get(obj1.constructor.name + obj2.constructor.name);
    return cm && cm(obj1, obj2);
};
//# sourceMappingURL=collideMethods.js.map
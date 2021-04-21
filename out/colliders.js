import { WObject } from "./engine.js";
import { isCollide } from "./collideMethods.js";
import { WOFrame } from "./basics.js";
import { collideFrames } from "./collideMethods.js";
const voidAction = () => { };
export class CollisionManager {
    constructor(initialCollideMap) {
        this.collideMap = initialCollideMap();
    }
    lookup(classes) {
        var _a;
        return (_a = this.collideMap.get(classes)) !== null && _a !== void 0 ? _a : voidAction;
    }
    runActivity(wo1, wo2) {
        this.lookup(wo1.wobjName + wo2.wobjName)(wo1, wo2);
    }
}
export class WOCollidersContainer extends WObject {
    constructor(x, y, w, h, color, rateCheck, initCollideMap) {
        super(x, y, w, h, color);
        this.rateCheck = rateCheck;
        this.intervalID = 0;
        this.frame = new WOFrame(x, y, w, h);
        if (initCollideMap)
            this.setCollisionManager(initCollideMap);
    }
    setCollisionManager(initCollideMap) {
        this.collisionManager = new CollisionManager(initCollideMap);
        return;
        if (this.intervalID !== 0)
            clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            this.checkCollide();
        }, this.rateCheck);
    }
    rectObjInsideFrame() {
        return this.elements.filter((wbj) => collideFrames(this.frame, wbj.frame));
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
    checkCollide() {
        this.elements.forEach((wo1) => {
            this.elements.forEach((wo2) => {
                if (wo1 !== wo2 && isCollide(wo1, wo2)) {
                    console.log("Colliding!");
                    this.collisionManager.runActivity(wo1, wo2);
                }
            });
        });
    }
}
//# sourceMappingURL=colliders.js.map
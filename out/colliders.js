import { WObject } from "./engine.js";
import { WOPairString } from "./basics.js";
import { isCollide } from "./collideMethods.js";
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
        this.lookup(new WOPairString(wo1.constructor.name, wo2.constructor.name))(wo1, wo2);
    }
}
export class WOCollidersContainer extends WObject {
    constructor(x, y, w, h, color, initCollideMap) {
        super(x, y, w, h, color);
        this.collusionManager = new CollisionManager(initCollideMap);
        setInterval(() => {
            this.checkCollide();
        }, 200);
    }
    checkCollide() {
        this.elements.forEach((wo1) => {
            this.elements.forEach((wo2) => {
                if (wo1 !== wo2 && isCollide(wo1, wo2)) {
                    console.log("Colliding!");
                    // this.collusionManager.runActivity(wo1, wo2);
                }
            });
        });
    }
}
//# sourceMappingURL=colliders.js.map
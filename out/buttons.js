import { WObject } from "./engine.js";
import { WORect } from "./shapes.js";
class WOInternalButton extends WORect {
    constructor(x, y, w, h, color, id) {
        super(x, y, w, h, color);
        this.id = id;
        this.setText("Click on me");
    }
    onClickMethod() {
        this.onClick && this.onClick();
    }
    contain(x, y) {
        return this.frame.contain(x, y);
    }
}
export class WOButton extends WObject {
    constructor() {
        super(0, 0, 0, 0, ""); //empty super
    }
    static init(canvas) {
        if (!WOButton.instance) {
            WOButton.instance = new WOButton();
            WOButton.instance.actionMap = new Map();
            canvas.addEventListener("click", (event) => {
                WOButton.instance.checkWhenClicked(event);
            });
        }
        return WOButton.instance;
    }
    static getInstance() {
        return WOButton.instance;
    }
    static add(x, y, w, h, color, onClick) {
        var _a;
        if (!WOButton.instance)
            throw new Error("WOButton singleton class did not initiated. call init() first.");
        let nextID = (_a = WOButton.instance.elements.length) !== null && _a !== void 0 ? _a : 0;
        let newButton = new WOInternalButton(x, y, w, h, color, nextID);
        onClick && WOButton.instance.actionMap.set(nextID, onClick);
        WOButton.instance.elements.push(newButton);
    }
    checkWhenClicked(event) {
        WOButton.instance.elements.forEach((button) => {
            if (button.contain(event.offsetX, event.offsetY)) {
                const action = WOButton.instance.actionMap.get(button.id);
                action && action();
            }
        });
    }
}
//# sourceMappingURL=buttons.js.map
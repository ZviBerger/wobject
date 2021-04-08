import { WObject } from "./engine.js";
import { WORect } from "./shapes.js";
import { adjustColor } from "./utility.js";
class WOInternalButton extends WORect {
    constructor(x, y, w, h, color, text, id) {
        super(x, y, w, h, color);
        this.id = id;
        this.setText(text);
        this.pressedNow = false;
        this.clickedColor = adjustColor(this.color, -30);
        this.normalColor = this.color;
    }
    onClickMethod() {
        this.onClick && this.onClick();
    }
    contain(x, y) {
        return this.frame.contain(x, y);
    }
    myDisplay(context) {
        super.myDisplay(context);
        if (this.pressedNow) {
            this.color = this.clickedColor;
        }
        else {
            this.color = this.normalColor;
        }
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
            canvas.addEventListener("mousedown", (event) => {
                WOButton.instance.checkWhenClicked(event);
            });
            canvas.addEventListener("mouseup", (event) => {
                WOButton.instance.checkAfterClicked(event);
            });
        }
        WOButton.instance.canvas = canvas;
        return WOButton.instance;
    }
    static getInstance() {
        return WOButton.instance;
    }
    static add(x, y, w, h, color, text, onClick) {
        var _a;
        if (!WOButton.instance)
            throw new Error("WOButton singleton class did not initiated. call init() first.");
        const nextID = (_a = WOButton.instance.elements.length) !== null && _a !== void 0 ? _a : 0;
        const newButton = new WOInternalButton(x, y, w, h, color, text, nextID);
        onClick && WOButton.instance.actionMap.set(nextID, onClick);
        WOButton.instance.elements.push(newButton);
        return newButton;
    }
    checkWhenClicked(event) {
        WOButton.instance.elements.forEach((button) => {
            if ((button.pressedNow = button.contain(event.offsetX, event.offsetY))) {
                const action = WOButton.instance.actionMap.get(button.id);
                action && action();
            }
        });
    }
    checkAfterClicked(event) {
        WOButton.instance.elements.forEach((button) => {
            button.pressedNow = false;
        });
    }
}
//# sourceMappingURL=buttons.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WObject } from "./engine.js";
import { WORect } from "./shapes.js";
import { adjustColor } from "./utility.js";
export class WOInternalButton extends WORect {
    constructor(x, y, w, h, color, text, id) {
        super(x, y, w, h, color);
        this.id = id;
        this.setText(text);
        this.pressedNow = false;
        this.clickedColor = adjustColor(this.color, -30);
        this.normalColor = this.color;
        this.hide = false;
    }
    onClickMethod() {
        this.onClick && this.onClick();
    }
    contain(x, y) {
        return this.frame.contain(x, y);
    }
    setHide(hide) {
        this.hide = hide;
    }
    myDisplay(context) {
        if (this.hide)
            return;
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
            canvas.addEventListener("touchstart", (event) => __awaiter(this, void 0, void 0, function* () {
                WOButton.instance.checkWhenTouched(event);
            }), { passive: true });
            canvas.addEventListener("touchend", (event) => __awaiter(this, void 0, void 0, function* () {
                setTimeout(() => {
                    WOButton.instance.checkAfterEvent(event);
                }, 100);
            }));
            canvas.addEventListener("mousedown", (event) => {
                WOButton.instance.checkWhenClicked(event);
            });
            canvas.addEventListener("mouseup", (event) => {
                setTimeout(() => {
                    WOButton.instance.checkAfterEvent(event);
                }, 100);
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
            if (!button.hide &&
                (button.pressedNow = button.contain(event.offsetX, event.offsetY))) {
                const action = WOButton.instance.actionMap.get(button.id);
                action && action();
            }
        });
    }
    checkWhenTouched(event) {
        WOButton.instance.elements.forEach((button) => {
            if (!button.hide &&
                (button.pressedNow = button.contain(event.touches[0].clientX, event.touches[0].clientY))) {
                const action = WOButton.instance.actionMap.get(button.id);
                action && action();
            }
        });
    }
    checkAfterEvent(event) {
        WOButton.instance.elements.forEach((button) => {
            button.pressedNow = false;
        });
    }
}
//# sourceMappingURL=buttons.js.map
import { WObject } from "./engine.js";
export class WOTextBox extends WObject {
    constructor(x, y, w, h, color, text) {
        super(x, y, w, h, color);
        this.text = text;
    }
    setText(text) {
        this.text = text;
    }
    display(context) {
        context.fillText(this.text, this.position.x, this.position.y);
    }
}
//# sourceMappingURL=text.js.map
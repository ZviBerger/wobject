import { WObject } from "./engine.js";
export class WOTextBox extends WObject {
    constructor(x, y, w, h, color, text, fontSize) {
        super(x, y, w, h, color);
        this.text = text;
        this.fontSize = fontSize;
    }
    setText(text) {
        this.text = text;
    }
    setFontSize(fontSize) {
        this.fontSize = fontSize;
    }
    display(context) {
        var _a;
        context.beginPath();
        context.fillStyle = this.color;
        context.fill();
        context.shadowColor = "#666565";
        context.strokeStyle = "#000";
        context.shadowBlur = 0;
        context.font = `${(_a = this.fontSize) !== null && _a !== void 0 ? _a : "30px"} Courier New`;
        context.fillText(this.text, this.position.x, this.position.y);
        context.stroke();
    }
}
//# sourceMappingURL=text.js.map
import { WObject } from "./engine.js";
export class WOContainer extends WObject {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.lastElementX = x;
        this.lastElementWidth = x;
    }
    reOrganize(position) { }
    isFull(element) {
        return false;
    }
}
export class WOHorizontalContainer extends WOContainer {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
    }
    reOrganize(position) {
        var _a;
        if (!position)
            return;
        let countWidths = 0;
        this.elements.forEach((element) => {
            countWidths += element.getFullWidth() + this.margin.left;
        });
        console.log(position);
        if (countWidths > 0)
            countWidths -= this.margin.left;
        let leftSpace = (this.size.width - countWidths) / 2;
        leftSpace += position.x;
        let lastEnd = (_a = position.x) !== null && _a !== void 0 ? _a : 0;
        this.elements.forEach((element, i) => {
            element.position.x = i == 0 ? leftSpace : lastEnd + this.margin.left;
            lastEnd = element.position.x + element.size.width;
            element.reOrganize(element.position);
        });
    }
    addElement(element) {
        element.position.y += this.margin.top + this.position.y;
        this.elements.push(element);
        this.reOrganize(this.position);
    }
    isFull(element) {
        var _a, _b, _c;
        let lastElement = this.elements.slice(-1).pop();
        let lastElementX = (_a = lastElement.position.x) !== null && _a !== void 0 ? _a : this.position.x;
        let lastElementWidth = (_b = lastElement.size.width) !== null && _b !== void 0 ? _b : 0;
        let endWithMargin = lastElementX + lastElementWidth + ((_c = lastElement.margin.right) !== null && _c !== void 0 ? _c : 0);
        return (endWithMargin + element.size.getFullWidth() >
            this.position.x + this.size.width);
    }
}
export class WOVerticalContainer extends WOContainer {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
    }
    reOrganize(position) {
        if (!position)
            return;
        let countHeight = 0;
        this.elements.forEach((element) => {
            countHeight += element.getFullHeight() + this.margin.top;
        });
        if (countHeight > 0)
            countHeight -= this.margin.top;
        let topSpace = (this.size.high - countHeight) / 2;
        topSpace += position.y;
        let lastEnd = position ? position.y : 0;
        this.elements.forEach((element, i) => {
            element.position.y = i == 0 ? topSpace : lastEnd + this.margin.top;
            lastEnd = element.position.y + element.size.high;
            element.reOrganize(element.position);
        });
    }
    addElement(element) {
        element.position.x += this.margin.left + this.position.x;
        this.elements.push(element);
        this.reOrganize(this.position);
    }
}
export class WODynamicContainer extends WOContainer {
    constructor(x, y, w, h, color, padding) {
        super(x, y, w, h, color);
        this.padding = padding;
        this.rowsNum = 0;
    }
    reOrganize(position) {
        if (!position)
            return;
    }
    addElement(element) {
        this.elements.push(element);
        this.reOrganize(this.position);
    }
}
export class WOGridContainer extends WOContainer {
    constructor(x, y, w, h, color, itemsPerRow) {
        super(x, y, w, h, color);
        this.itemsPerRow = itemsPerRow;
    }
}
//# sourceMappingURL=containers.js.map
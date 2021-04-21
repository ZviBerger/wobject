import { WOPosition, WOSize } from "./basics.js";
import { WObject } from "./engine.js";
export class WOImage extends WObject {
    constructor(x, y, imgPath, w, h) {
        super(x, y, w, h);
        if (imgPath) {
            this.image = w && h ? new Image(w, h) : new Image();
            this.image.src = imgPath;
            this.image.onload = () => {
                this.loaded = true;
            };
        }
        this.loaded = false;
        this.slicing = false;
    }
    setImage(image) {
        this.image = image;
        this.loaded = image.complete;
    }
    setSlice(x, y, w, h) {
        this.slicing = true;
        this.slicePos = new WOPosition(x, y);
        this.sliceSize = new WOSize(w, h);
    }
    setFrameSize(w, h) {
        this.size.width = w;
        this.size.height = h;
    }
    myDisplay(context) {
        var _a, _b;
        if (!this.loaded)
            return;
        // context.shadowBlur = 100;
        if (this.slicing)
            context.drawImage(this.image, this.slicePos.x, this.slicePos.y, this.sliceSize.width, this.sliceSize.height, this.position.x, this.position.y, this.size.width, this.size.height);
        else {
            context.drawImage(this.image, this.position.x, this.position.y, (_a = this.size.width) !== null && _a !== void 0 ? _a : this.image.width, (_b = this.size.height) !== null && _b !== void 0 ? _b : this.image.height);
        }
        context.stroke();
    }
}
//# sourceMappingURL=image.js.map
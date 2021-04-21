import { WOPosition, WOSize } from "./basics.js";
import { WObject } from "./engine.js";

export class WOImage extends WObject {
  image: HTMLImageElement;
  loaded: boolean;
  slicing: boolean;
  slicePos: WOPosition;
  sliceSize: WOSize;

  constructor(x: number, y: number, imgPath?: string, w?: number, h?: number) {
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

  setImage(image: HTMLImageElement): void {
    this.image = image;
    this.loaded = image.complete;
  }

  setSlice(x: number, y: number, w: number, h: number): void {
    this.slicing = true;
    this.slicePos = new WOPosition(x, y);
    this.sliceSize = new WOSize(w, h);
  }

  setFrameSize(w: number, h: number) {
    this.size.width = w;
    this.size.height = h;
  }

  myDisplay(context: CanvasRenderingContext2D) {
    if (!this.loaded) return;

    // context.shadowBlur = 100;
    if (this.slicing)
      context.drawImage(
        this.image,
        this.slicePos.x,
        this.slicePos.y,
        this.sliceSize.width,
        this.sliceSize.height,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    else {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.width ?? this.image.width,
        this.size.height ?? this.image.height
      );
    }

    context.stroke();
  }
}

import { WObject, WOImage } from "./index.js";

export class WOAnimation extends WObject {
  frames: Array<WOImage>;
  index: number;
  frameNum: number;
  loaded: boolean;
  animFinished: boolean;
  infinityLoop: boolean;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    framesNum: number,
    spriteSource: string,
    infinityLoop: boolean
  ) {
    super(x, y, w, h);
    this.frames = new Array();
    this.index = 0;
    this.loaded = false;
    this.frameNum = framesNum;
    this.animFinished = true;
    this.infinityLoop = infinityLoop;

    const image = new Image();
    image.src = spriteSource;
    image.onload = () => {
      const frameWidth = image.width / framesNum;
      for (let Sx = 0; Sx < framesNum; Sx++) {
        const frameImg = new WOImage(x, y);
        frameImg.setImage(image);
        frameImg.setSlice(Sx * frameWidth, 0, frameWidth, image.height);
        frameImg.setFrameSize(w, h);
        //make both position & size reference to the owner for quick update
        frameImg.position = this.position;
        frameImg.size = this.size;
        this.frames.push(frameImg);
      }
      this.loaded = true;
      this.animFinished = false;
    };
  }

  init(): void {
    this.index = 0;
    this.animFinished = false;
  }

  nextFrame(): void {
    if (!this.loaded) return;
    this.animFinished = this.index === this.frameNum - 1;
    this.elements.pop();
    if (this.animFinished && !this.infinityLoop) return;
    this.addElementNotAdopt(this.frames[this.index]);
    this.index = (this.index + 1) % this.frameNum;
  }

  hasFinished(): boolean {
    return this.animFinished && !this.infinityLoop;
  }

  update() {
    if (!this.animFinished || this.infinityLoop) this.nextFrame();

    super.update();
  }
}

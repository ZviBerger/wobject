import { WOPosition, WOSize } from "./basics";
import { WObject } from "./engine";
export declare class WOImage extends WObject {
    image: HTMLImageElement;
    loaded: boolean;
    slicing: boolean;
    slicePos: WOPosition;
    sliceSize: WOSize;
    constructor(x: number, y: number, imgPath?: string, w?: number, h?: number);
    setImage(image: HTMLImageElement): void;
    setSlice(x: number, y: number, w: number, h: number): void;
    setFrameSize(w: number, h: number): void;
    myDisplay(context: CanvasRenderingContext2D): void;
}

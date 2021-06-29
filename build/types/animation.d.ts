import { WObject } from "./engine";
import { WOImage } from "./image";
export declare class WOAnimation extends WObject {
    frames: Array<WOImage>;
    index: number;
    frameNum: number;
    loaded: boolean;
    animFinished: boolean;
    infinityLoop: boolean;
    constructor(x: number, y: number, w: number, h: number, framesNum: number, spriteSource: string, infinityLoop: boolean, initialFrame?: number);
    init(): void;
    nextFrame(): void;
    hasFinished(): boolean;
    update(): void;
}

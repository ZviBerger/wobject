import { WOPosition } from "./basics";
import { LightWObject } from "./engine";
export declare const getRandomColor: () => string;
export declare const adjustColor: (color: string, amount: number) => string;
export declare const getRandomNumber: (min: number, max: number) => number;
export declare const getRandomInteger: (min: number, max: number) => number;
export declare const getRandomPosition: (xMin: any, xMax: any, yMin: any, yMax: any) => WOPosition;
export declare class WOClock extends LightWObject {
    iterationsToCount: number;
    count: number;
    constructor(iterationsToCount: number);
    update(): void;
    isTime(): boolean;
    restart(): void;
}

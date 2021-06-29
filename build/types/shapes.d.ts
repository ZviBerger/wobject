import { WObject } from "./engine";
import { WOFrame, WOPosition } from "./basics";
import { WOTextBox } from "./text";
/**
 *@class WOShape is a general shape form extends WObject
 */
declare class WOShape extends WObject {
    text: WOTextBox;
    setText(text: string): void;
    setTextPosition(position: WOPosition): void;
}
/**
 *@class WORect is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */
export declare class WORect extends WOShape {
    frame: WOFrame;
    constructor(x: number, y: number, w: number, h: number, color: string);
    update(): void;
    myDisplay(context: CanvasRenderingContext2D): void;
}
export declare class WORoundedRect extends WORect {
    borderRadius: number;
    constructor(x: number, y: number, w: number, h: number, r: number, color: string);
    myDisplay(context: CanvasRenderingContext2D): void;
}
/**
 *@class WOCircle is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */
export declare class WOCircle extends WOShape {
    radius: number;
    constructor(x: number, y: number, r: number, color: string);
    myDisplay(context: CanvasRenderingContext2D): void;
}
export {};

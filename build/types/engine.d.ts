import { WOMargin, WOPosition, WOSize, WOPadding, WOMotion } from "./basics";
export interface WebObject {
    elements: Array<WebObject>;
    update(): void;
    addElement(s: WebObject): void;
    display(context: CanvasRenderingContext2D): void;
    reOrganize(position?: WOPosition): void;
    clear(): void;
}
export declare class WObject implements WebObject {
    elements: Array<WObject>;
    position: WOPosition;
    originPos: WOPosition;
    size: WOSize;
    margin: WOMargin;
    padding: WOPadding;
    motion: WOMotion;
    color: string;
    wobjName: string;
    motionMethods: (motion: WOMotion) => WOMotion;
    constructor(x: number, y: number, w: number, h: number, color?: string);
    update(): void;
    getFullWidth(): number;
    getFullHeight(): number;
    setMotionMethod(motionMethods: (motion: WOMotion) => WOMotion): void;
    setMotion(motion: WOMotion): void;
    adoptPosition(position: WOPosition): void;
    setPosition(position: WOPosition): void;
    setMargin(left: number, top: number, right: number, bottom: number): void;
    setPadding(left: number, top: number, right: number, bottom: number): void;
    reOrganize(position?: WOPosition): void;
    clear(): void;
    addElement(s: WObject): void;
    addElementNotAdopt(s: WObject): void;
    myDisplay(context: CanvasRenderingContext2D): void;
    display(context: CanvasRenderingContext2D): void;
}
/**
 * @class LightWObject
 *
 */
export declare class LightWObject implements WebObject {
    elements: Array<WebObject>;
    wobjName: string;
    constructor();
    update(): void;
    reOrganize(): void;
    addElement(s: WebObject): void;
    clear(): void;
    myDisplay(context: CanvasRenderingContext2D): void;
    display(context: CanvasRenderingContext2D): void;
}

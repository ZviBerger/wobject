import { WObject } from "./engine";
import { WOPadding, WOPosition } from "./basics";
interface Container {
    isFull(element: WObject): boolean;
    reOrganize(position: WOPosition): void;
}
export declare class WOContainer extends WObject implements Container {
    lastElementX: number;
    lastElementWidth: number;
    constructor(x: number, y: number, w: number, h: number, color: string);
    reOrganize(position: WOPosition): void;
    isFull(element: WObject): boolean;
    myDisplay(context: CanvasRenderingContext2D): void;
}
export declare class WOHorizontalContainer extends WOContainer {
    constructor(x: number, y: any, w: any, h: any, color: any);
    reOrganize(position: WOPosition): void;
    addElement(element: WObject): void;
    isFull(element: WObject): boolean;
}
export declare class WOVerticalContainer extends WOContainer {
    constructor(x: number, y: any, w: any, h: any, color: any);
    reOrganize(position: WOPosition): void;
    addElement(element: WObject): void;
}
export declare class WODynamicContainer extends WOContainer {
    rowsNum: number;
    constructor(x: number, y: number, w: number, h: number, color: string, padding: WOPadding);
    reOrganize(position: WOPosition): void;
    addElement(element: WObject): void;
}
export declare class WOGridContainer extends WOContainer {
    itemsPerRow: number;
    constructor(x: number, y: number, w: number, h: number, color: string, itemsPerRow: number);
}
export {};

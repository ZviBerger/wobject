export declare class WOStore {
    data: object;
    constructor();
}
export declare class WOPosition {
    x: number;
    y: number;
    constructor(x: number, y: number);
    set(x: number, y: number): void;
    adapt(motion: WOMotion): void;
}
export declare class WOMargin {
    left: number;
    top: number;
    right: number;
    bottom: number;
    constructor();
    set(left: number, top: number, right: number, bottom: number): void;
}
export declare class WOPadding {
    left: number;
    top: number;
    right: number;
    bottom: number;
    constructor();
    set(left: number, top: number, right: number, bottom: number): void;
}
export declare class WOSize {
    width: number;
    height: number;
    constructor(width: number, high: number);
}
export declare class WOFrame {
    topLeft: WOPosition;
    topRight: WOPosition;
    bottomLeft: WOPosition;
    bottomRight: WOPosition;
    constructor(x: number, y: number, w: number, h: number);
    update(pos: WOPosition, size: WOSize): void;
    contain(x: number, y: number): boolean;
}
export declare class WOMotion {
    dX: number;
    dY: number;
    radius: number;
    angel: number;
    constructor();
    set(dX: number, dY: number, radius: number): void;
    setRadius(radius: number): void;
}
export declare class WOPairString {
    objName1: string;
    objName2: string;
    constructor(objName1: string, objName2: string);
    asString(): string;
}

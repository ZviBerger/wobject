import { WObject } from "./engine";
import { WORect } from "./shapes";
declare type ClickAction = () => void;
interface Clickable {
    onClickMethod(): void;
    contain(x: number, y: number): boolean;
    pressedNow: boolean;
}
export declare class WOInternalButton extends WORect implements Clickable {
    onClick: ClickAction;
    id: number;
    pressedNow: boolean;
    clickedColor: string;
    normalColor: string;
    hide: boolean;
    constructor(x: number, y: number, w: number, h: number, color: string, text: string, id: number);
    onClickMethod(): void;
    contain(x: number, y: number): boolean;
    setHide(hide: boolean): void;
    myDisplay(context: CanvasRenderingContext2D): void;
}
export declare class WOButton extends WObject {
    canvas: object;
    private static instance;
    private actionMap;
    private constructor();
    static init(canvas: any): WOButton;
    static getInstance(): WOButton;
    static add(x: number, y: number, w: number, h: number, color: string, text?: string, onClick?: ClickAction): WOInternalButton;
    private checkWhenClicked;
    private checkWhenTouched;
    private checkAfterEvent;
}
export {};

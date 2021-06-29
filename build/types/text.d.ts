import { WObject } from "./engine";
export declare class WOTextBox extends WObject {
    text: string;
    fontSize: string;
    constructor(x: number, y: number, w: number, h: number, color: string, text?: string, fontSize?: string);
    setText(text: string): void;
    setFontSize(fontSize: string): void;
    display(context: CanvasRenderingContext2D): void;
}

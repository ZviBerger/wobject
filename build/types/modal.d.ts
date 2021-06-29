import { WObject } from "./engine";
import { WORoundedRect } from "./shapes";
import { WOInternalButton } from "./buttons";
declare type Submit = () => {};
export declare class WOModal extends WORoundedRect {
    modalContent: WObject;
    actionToDo: Submit;
    windowWidth: number;
    windowHeight: number;
    showNow: boolean;
    closeButton: WOInternalButton;
    title: string;
    constructor(windowWidth: number, windowHeight: number, modalWidth: number, modalHeight: number, borderRadius: number, color: string, content: WObject, actionMethod: Submit);
    show(): void;
    hide(): void;
    closeModal(): void;
    myDisplay(context: CanvasRenderingContext2D): void;
}
export {};

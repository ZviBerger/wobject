/**
 * app module.
 * @module WOApp
 * @see module:Engine
 */
import { WOPosition } from "./basics";
import { WebObject } from "./engine";
/**
 * @class WOApp - each app should have single instance of this class.
 * WOApp wobject control the entire life cycle of the application.
 * The instance is the root wobject of the application.
 */
export declare class WOApp implements WebObject {
    canvas: any;
    context: CanvasRenderingContext2D;
    elements: Array<WebObject>;
    updateRate: number;
    /**
     * Create WOApp
   * @param canvasID {string}   the canvas id as defined in the HTML file
   * @param updateRate {string} each time in ms the app will process the all cycle -- > Update -> Display
   * This class can be extended in order to add more functionality (take a look on the spaceship game for example).
   
     */
    constructor(canvasID: string, updateRate: number);
    /**
     * @method update run each cycle for ech child wobject before display
     */
    update(): void;
    /**
     * @method reOrganize make all children nested wobjects be ordered relative to position or there father
     * @param position (optional) position to be relative to.
     */
    reOrganize(position?: WOPosition): void;
    /**
     * @method addElement add an wobject element to be under this wobject.. ( WObject    )
     * @param element {WObject} any wobject extended instance.            /  /   |  \   \
     *                                                                  (W) (W) (W) (W) (W)
     */
    addElement(element: WebObject): void;
    /**
     * @method clear - remove all children wobjects
     */
    clear(): void;
    /**
     * @method display - clear the canvas and display the new state of the children wobject after been updated.
     * @see update
     */
    display(): void;
    /**
     * @method run - main loop that makes the application running
     * @cal update & display for each child wobject
     */
    run(): void;
}

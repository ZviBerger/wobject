export class WOApp {
    constructor(canvasID, updateRate) {
        this.canvas = document.getElementById(canvasID);
        this.context = this.canvas.getContext("2d");
        this.elements = [];
        this.updateRate = updateRate;
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    update() {
        this.elements.forEach((element) => {
            element.update();
        });
    }
    reOrganize(position) {
        this.elements.forEach((element) => {
            try {
                element.reOrganize();
            }
            catch (e) {
                console.log("Error:", e);
            }
        });
    }
    addElement(element) {
        this.elements.push(element);
        this.reOrganize();
    }
    display() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.elements.forEach((element) => {
            element.display(this.context);
        });
    }
    run() {
        this.update();
        this.display();
        setInterval(() => {
            this.update();
            this.display();
        }, this.updateRate);
    }
}
//# sourceMappingURL=wobject.js.map
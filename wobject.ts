import {WObject} from "./engine"

export class WOApp{
    canvas:     any 
    context:    any
    elements:   Array<WObject>;
    updateRate: number;
constructor(canvasID, updateRate){
    this.canvas     = document.getElementById(canvasID);
    this.context    = this.canvas.getContext("2d");
    this.elements   = [];
    this.updateRate = updateRate;

}
update(){
    this.elements.forEach(element => {
        element.update();
    });
}
reOrganize(position){
    this.elements.forEach((element)=>{
        element.reOrganize(element.position);
    })
}

addElement(element){
    this.elements.push(element);
    this.reOrganize(element.position);
}

display(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.elements.forEach(element => {
        element.display(this.context);
    });
   
}
run(){
    this.update();
    this.display();
    setInterval(() => {
        this.update();
        this.display();
    }, this.updateRate);
}
}


import {WOMargin,WOPosition,WOSize} from "./basics.js"
import {getRandomColor} from "./utility.js"

export class WObject{
    constructor(x,y,w,h,color){
        this.elements  = [];
        this.position  = new WOPosition(x,y);
        this.originPos = new WOPosition(x,y);
        this.size      = new WOSize(w,h);
        this.margin    = new WOMargin()
        this.color     = color
    
    }
    update(){
        this.color=getRandomColor();
        this.elements.forEach(element => {
            element.update();
        });
    }
    getFullWidth(){
        return this.margin.left+this.size.width+this.margin.right;
    }

    adoptPosition(position){
        this.position.x+=position.x;
        this.position.y+=position.y;
    }

    setMargin(left,top,right,bottom){
        this.margin.set(left,top,right,bottom); 
    }
    reOrganize(){
        this.elements.forEach(element => {
            element.reOrganize(this.position);
        });
    }

    addElement(s){
        s.adoptPosition(this.position);
        this.elements.push(s);
    }

    display(context){
        // a default displaying
        //override the functionality by extending this class
        context.beginPath();
        context.lineWidth    = "1";
        context.fillStyle    = this.color;
        context.shadowColor  = "#666565";
        context.strokeStyle  = this.color;
        context.shadowBlur   = 5;
        context.fillRect(this.position.x, this.position.y,  this.size.width,this.size.high);
        context.stroke();
        this.elements.forEach(element => {
            element.display(context);
        });
    }
}

export class WOApp{
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
    reOrganize(){
        this.elements.forEach((element)=>{
            element.reOrganize(element.position);
        })
    }

    addElement(element){
        this.elements.push(element);
        this.reOrganize(element.position);
    }

    display(){
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

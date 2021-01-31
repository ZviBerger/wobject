import { WObject, WOApp} from "./engine.js"
import {WOFrame,WOPosition} from "./basics.js"
export class WOContainer extends WObject{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color);
        this.lastElementX=x;
        this.lastElementWidth=x;
    }
    reOrganize(){

    }
}
export class WOHorizontalContainer extends WOContainer{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color);
    }
    reOrganize(position){
       if(!position)return
       let countWidths = 0;
        this.elements.forEach((element)=>{
           countWidths+=element.getFullWidth()+this.margin.left;
        })
        console.log(position)
        if(countWidths>0) countWidths-=this.margin.left;
        let leftSpace = (this.size.width-countWidths)/2;
        leftSpace+=position.x;
        let lastEnd   =  position?position.x:0;
        this.elements.forEach((element,i) => {
            element.position.x = (i==0)? leftSpace:lastEnd+this.margin.left;
            // leftSpace+i*(this.margin.left+element.size.width)
            lastEnd=element.position.x+element.size.width;
            element.reOrganize(element.position)  
        });
    }
    addElement(element){
    //    element.position.x += this.margin.left + this.position.x + this.lastElementX + this.lastElementWidth;
        element.position.y += this.margin.top + this.position.y
        this.elements.push(element);
        this.reOrganize(this.position);
    }
    
}

export class WOGridContainer extends WOContainer{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color)
    }

}
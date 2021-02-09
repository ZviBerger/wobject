import { WObject} from "./engine.js"
import {WOApp} from "./wobject.js"

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
            leftSpace+=  position.x;
        let lastEnd   =  position.x??0;
        this.elements.forEach((element,i) => {
            element.position.x = (i==0)? leftSpace:lastEnd+this.margin.left;
            lastEnd=element.position.x+element.size.width;
            element.reOrganize(element.position)  
        });

    }
    addElement(element){
        element.position.y += this.margin.top + this.position.y
        this.elements.push(element);
        this.reOrganize(this.position);
    
    }
    isFull(element){
        let lastElement       = this.elements.slice(-1).pop();
        let lastElementX      = lastElement.position.x ?? this.position.x;
        let lastElementWidth  = lastElement.size.width ?? 0;
        let endWithMargin     = lastElementX+lastElementWidth+ ( lastElement.margin.right ?? 0)
        return endWithMargin + element.size.getFullWidth() > this.position.x+this.size.width;
    }
    
}
export class WOVerticalContainer extends WOContainer{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color);
    }
    reOrganize(position){
       if(!position)return
       let countHeight = 0;
        this.elements.forEach((element)=>{
           countHeight+=element.getFullHeight()+this.margin.top;
        })
        if(countHeight>0) countHeight-=this.margin.top;
        let topSpace = (this.size.high-countHeight)/2;
        topSpace+=position.y;
        let lastEnd   =  position?position.y:0;
        this.elements.forEach((element,i) => {
            element.position.y = (i==0)? topSpace:lastEnd+this.margin.top;
            lastEnd=element.position.y+element.size.high;
            element.reOrganize(element.position)  
        });
    }
    addElement(element){
       element.position.x += this.margin.left + this.position.x
        this.elements.push(element);
        this.reOrganize(this.position);
    }
    
}


export class WODynamicContainer extends WOContainer{
    
    constructor(x,y,w,h,color,padding){
        super(x,y,w,h,color);
        this.padding = padding;
        this.rowsNum = 0;
        
    }
    reOrganize(position){
        if(!position)return

     }
     addElement(element){
         this.elements.push(element);
         this.reOrganize(this.position);
     
     }

}

export class WOGridContainer extends WOContainer{
    constructor(x,y,w,h,color,itemsPerRow){
        super(x,y,w,h,color);
        this.itemsPerRow=itemsPerRow;
    }

}
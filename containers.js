import { WObject, WOApp} from "./engine.js"

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
    reOrganize(){
    console.log(this)
        let countWidths = 0;
       this.elements.forEach((element)=>{
           countWidths+=element.size.width+this.margin.left;
       })
       if(countWidths>0)
        countWidths-=this.margin.left;
       console.log("countWidths",countWidths)
       let leftSpace = (this.size.width-countWidths)/2;
        let alignDelta  = (this.position.x + this.size.width  - this.lastElementWidth)/2;
            alignDelta /= this.elements.length;
        let  absX       = this.position.x;
        let  lastEnd    = absX;
        this.elements.forEach((element,i) => {
            element.position.x = (i==0)? leftSpace: lastEnd+this.margin.left;
            lastEnd=element.position.x+element.size.width;
        });
    }
    addElement(element){
    //    element.position.x += this.margin.left + this.position.x + this.lastElementX + this.lastElementWidth;
        element.position.y += this.margin.top + this.position.y
        this.lastElementX  = element.position.x;
        this.lastElementWidth = element.position.x + element.size.width;
        this.elements.push(element);
       this.reOrganize();
    }
    
    
}
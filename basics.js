export class WOStore{
    constructor(){
        this.data={}
    }
    
}

export class WOPosition{
    constructor(x,y){
        this.x      = x;
        this.y      = y;
    }
}

export class WORect{
    constructor(x,y,w,h){
        this.x      = x;
        this.y      = y;
        this.width  = w;
        this.weight = h;
    }
}
export class WOMargin{
    constructor(){
        this.left   = 0;
        this.top    = 0;
        this.right  = 0;
        this.bottom = 0;  
    }
    set(left,top,right,bottom){
        this.left   = left;
        this.top    = top; 
        this.right  = right;
        this.bottom = bottom;  
    }
}
export class WOSize{
    constructor(width,high){
        this.width  = width;
        this.high   = high;
    }
}
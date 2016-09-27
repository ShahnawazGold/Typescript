


var add = (x:number , y : Number) =>{
 
 return x+y;
}

var add = (a: number, b: number) => {
    return a + b;
}

var add1 = (x: number, y: number) => (x + y);
//output var add1 = function(x, y){return x + y};

var myFunction = f => { this.x = "x"; }//automatically creating the that-equals-this pattern
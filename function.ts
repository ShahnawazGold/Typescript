
 function add(x:number , y :number) : number { // name function
     
     return x+y;
 }


//////////////////Anonymous function
 var myAdd = function (x:number ,y :number) : number{ //Anonymous function
     return x+y ;
 };


/////////////////Anonymous function with explict type
  var myAdd1 : (x:number ,y :number) =>number = function (x:number ,y :number) : number{

      //Anonymous function with explict type
     return x+y ;
 };

//////////type names dont matter
var myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
    //type names dont matter
		return x+y; 
	};


     var myAdd4 =(x:number , y :number) => x+y;// lambda function
     //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

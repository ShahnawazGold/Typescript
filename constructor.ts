

class A {

    name :string;
    constructor(thename :string , age :number){


       this.name= thename;
       console.log("shah constr");
    }
}

class B extends A{


}


let  a : A = new A("shah",22); // This is working as expected
let b :B  = new B("JAMES",22);// This is working too as child class use parents constructor
let c: B = new B();      // This is not working as child class must use parents constructor
let d: B = new B("C");   // Thsi is also not working


// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
// call to super can be at any line in constructor unlike any other object oriented language with call to super must be as first line
class C {
}
class D extends C {
    name:string;
    constructor(theName: string,age:number) {
        this.name = theName; 
        console.log("D constrcutor");
        super(); // 
    }
}
let aa: C = new C(); // This is working as expected
let bb: D = new D(); // This is not working because child class has its 2 argumnet constrcutor
let cc: D = new D("C",8); // This is working as expected



// Case c:
// If parent class and child class both provide constructor then child class must call super with same parameters as they are in
// parent's constructor    
// call to super can be at any line in constructor unlike any other object oriented language with call to super must be as first line
class E {
    name:string;
    constructor(theName: string,age:number) { 
        this.name = theName; 
        console.log("E constrcutor");
    }
    displayName():void {
        console.log("Name = " + this.name);
    }
}
class F extends E {
    name:string;
    constructor(theName: string) {
        this.name = theName; 
        console.log("F constrcutor");
        super(theName,4);  // Must call super with two arguments
        
        //super("Hello",5); // Multiple supper call working, No error here -- seems to be some special case   
    }
}
let e: E = new E("E",1);
let f: F = new F("F");
f.displayName(); // Display "F"



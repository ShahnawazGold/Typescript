


//When working with classes and interfaces, it helps to keep in mind that a class has two types: 
//the type of the static side and the type of the instance side. 

//Lets us define a interface that defines a constructor

interface ClockInterface {
    new (hour: number, minute: number);//this defines a constructor signature
}

/*
class Clock1 implements ClockInterface  {//Error
    currentTime: Date;
    constructor(h: number, m: number) { }
}   */

//Instead, you would need to work with the 'static' side of the class directly. In this example, we work with the class directly:

interface ClockStatic {
    new (hour: number, minute: number);
}

interface MyClockInterface {
    currentTime: Date;
}

class Clock implements MyClockInterface  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock;
var newClock: ClockInterface = new cs(7, 30);









let myType :any ={name :"shah",id :1};


myType ={id :2, name :"james" };
myType = { id: 3,  name: "Mike", gender: false };//becuase of any it assign a different type
myType = { name: "Mike", gender: false };


myType =function () {
    
    console.log("this is string")
    
};

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
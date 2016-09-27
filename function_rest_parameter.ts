


function buildName(name :string ,...restOfName:string[]) {
    
    return name+ " " +restOfName.join("  ");
    
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");



//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =

function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


/*
	What do you think it's going to happen here?

	So, the global execution context will create one for 
	global settings, like a and myVar, allocates on memory

	call the function a and create another context
	the same is going to happen o b...

	but if I change remove the keyword var, what's going to happen?
*/
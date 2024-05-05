var a;
console.log(a);


if (a === undefined) {
    console.log('a is undefined!');   
}
else {
    console.log('a is defined!');   
}

/*
    What it will happen if you remove a?
    Yeah a is not defined but, if it's not defined
    should show the console error, right?

    Nope, On execution phase, the browser check
    every single value attached to memory and is 
    going to search for a value.

    Obviously, it has not been found, and with that
    is going to dispatch an error.

    We must separate and understand about creation and
    execution phases.

    a declared = default undefined value.
    no a declared, error dispatched, there's no
    a var assigned to a memory space.
*/
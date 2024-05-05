/*
    What is going on here?
    What do you think it gonna happen?
*/
b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

/* 
    If you thought something like: 
    It will dispatch an error because b needs to 
    be declared before it has been called

    and A it would fire another error, in the end
    a uses the same situation.

    So...

    The result will be, Called B and undefined.

    Basically there are Two phases when you script
    starts to run on browser.

    1 - Context Phase
        All variables and functions are going to be
        included on Window Global Object, and for variables
        it will be declared the default value which is 
        undefined, so, every command has been allocated in memory 

    2 - Execution Phase
        Yeah, here, everything is good to go and the values
        are going do added to value in memory space reserved for them

        var a

        a = 'Hello World';

        function b(){

        }

        b();

        Function for some engine reason allocates function in memory
        but with variables this didn't happen.
        So, first declare var and assign value to it.

        for functions, you can declare before but it's not a good
        pattern to follow.

*/
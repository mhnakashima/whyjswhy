function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

/*
    What do you think it's going to happen here?
    So, when I saw this example I thought it gonna show Hello World twice
    but it's not the case.

    On creation Phase, it will allocated on memory the var a with undefined.
    execution phase, will run console log // undefined.
    after that something like it will happen.

    var a = created on memory.

    console.log // show undefined

    a = "Hello world" //value assigned

    ...console.log Hello World.
*/
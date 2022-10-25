//Example 1

function greeting(name){
    console.log(`Hello, ${name}`);
}

function process(callback){
    const name = console.log("please enter your name");
    callback(name);
}

process(greeting);


//Example 2

function greeting2(named){
    console.log('Hello '+named);
}

function process2(callback){
    named = 'nidhi';
    callback(named);
}

process2(greeting2);
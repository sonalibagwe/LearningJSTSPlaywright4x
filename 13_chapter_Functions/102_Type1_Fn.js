//Type1 - No Parameters/Arguments, No Return => Final return undefined.

//Fn Define
function greet(){
    console.log("Hello, Sonali");
}

// Fn Calling
greet();

greet();
greet();
greet();


function openBrowser(){
    console.log("open Browser");
    //open the browser
}

openBrowser();


let msg = greet();   //undefined there is not return
console.log(msg);       //undefined


/* Ourtpu
Hello, Sonali
Hello, Sonali
Hello, Sonali
Hello, Sonali
open Browser
Hello, Sonali
undefined

*/
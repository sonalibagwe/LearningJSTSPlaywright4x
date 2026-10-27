let b = 20;         //Global Scope
console.log(b);     //20

function printHello() {
    console.log("Hello Sonali");
    let b = 30;         //Local Scope
    console.log(b);     //30
    if(true) {
        let b =5 ;
        console.log(b);     //5
    }
    console.log("let -> ", b);    //30
}   

printHello();       //let -> 30
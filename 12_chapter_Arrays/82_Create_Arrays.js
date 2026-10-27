let browsers = ["chrome", "Firefox", "Safari"];

let scores = new Array(3);  //create [empty X 3]
scores[0] = "1";

let scores2 = new Array(1, 2, 3);
    
let numbers = new Array(100, 200, 300, 400);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);       //5


//Array.from()
let chars = Array.from("Hello");
console.log(chars);             // [ 'H', 'e', 'l', 'l', 'o' ]
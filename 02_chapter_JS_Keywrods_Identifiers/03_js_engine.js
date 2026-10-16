let b = 10;
console.log(b);

//Hot_Code
 for (let a = 0; a < 10; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}
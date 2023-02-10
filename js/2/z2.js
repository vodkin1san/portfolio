let a = 13.123456789;
let b = 2.123 ;
let n = 5;

let first = Math.floor(
    (a % 1)  * Math.pow(10, n)
);
let second = Math.floor(
    (b % 1)  * Math.pow(10, n)
);

console.log('a=', first);
console.log('b=', second);
let n = 0;
let m = 100;

let min  = Math.min(n, m);
let max = Math.max(n, m);


let rand = Math.floor(min + Math.random() * (max + 1 - min));

console.log(rand);
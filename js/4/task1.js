let array = [];
let n = 0;
let m = 100;
let count = 100;

for (let i = 0 ; i < count; ++i) {
  array.push(Math.round(Math.random() * (m - n) + n));
}

console.log(array);
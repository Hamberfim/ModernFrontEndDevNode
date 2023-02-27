let x = 1;
let y = 2;
console.log(`x=${x}, y=${y}`);
// use es2021 conditional assignment
x &&= y;
console.log(`Conditional Assignment "x &&= y" results y=${y}`);

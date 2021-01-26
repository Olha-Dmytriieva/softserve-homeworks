let x = 1;
let y = 2;

res1 =  String(x+y)
console.log(res1); 
console.log(typeof res1);


let res2 = Boolean(x) +String(y);
console.log(res2);
console.log(typeof res2);


let res3 = Boolean(x+y);
console.log(res3); // true
console.log(typeof res3);


let res4 = Number(x) + Boolean(y) + NaN
console.log(res4); // NaN
console.log(typeof res4) 
const multiply = (a = 1, b = 1) => a * b;
const result1 = multiply(3, 4);
console.log(`multiply(3, 4) -> ${result1}`);
const result2 = multiply();
console.log(`multiply() -> ${result2}`);
const result3 = multiply(5);
console.log(`multiply(5) -> ${result3}`);
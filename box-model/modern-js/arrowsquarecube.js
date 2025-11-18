const calculatePower = (num) => ({
    square: num * num,
    cube: num * num * num
});
const inputNumber = 5;
const output = calculatePower(inputNumber);

console.log(`Input: ${inputNumber}`);
console.log(`Output:`, output);
const inputNumber2 = 3;
const output2 = calculatePower(inputNumber2);

console.log(`Input: ${inputNumber2}`);
console.log(`Output:`, output2);
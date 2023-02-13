"use strict";
const add = (num1, num2) => {
    return num1 + num2;
};
const printResult = (num) => {
    console.log(`Result: ${num}`);
};
printResult(add(3, 2));
const addAndHandle = (num1, num2, cb) => {
    const result = num1 + num2;
    cb(result);
};
let combineValues;
combineValues = add;
console.log(combineValues(2, 3));
addAndHandle(1, 9, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map
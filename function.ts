const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const printResult = (num: number): void => {
  console.log(`Result: ${num}`);
};

printResult(add(3, 2));

const addAndHandle = (
  num1: number,
  num2: number,
  cb: (num: number) => void
) => {
  const result = num1 + num2;
  cb(result);
};

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(2, 3));
// console.log(combineValues(2, 3));

addAndHandle(1, 9, (result: number): void => {
  console.log(result);
});

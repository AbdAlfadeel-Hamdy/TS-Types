const add = (
  num1: number,
  num2: number,
  showResult: boolean
): number | void => {
  if (showResult) console.log(num1 + num2);
  else return num1 + num2;
};

let number1: number;
number1 = 5;
let str = "Hi";
// str = 5;
// number1 = "6";
add(3, 5, true);

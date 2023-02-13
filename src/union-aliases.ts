type Combinable = number | string;

const combine = (num1: Combinable, num2: Combinable) => {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  else return num1.toString() + num2.toString();
};

const combinedAges = combine(20, 18);
console.log(combinedAges);
const combinedNames = combine("Gonzalo", "Hamdy");
console.log(combinedNames);

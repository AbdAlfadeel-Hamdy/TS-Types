// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type General = string | number;
type Numeric = number | boolean;
type Universal = General & Numeric;

// Type Guards && function overloading

function add2(num1: string, num2: string): string;
function add2(num1: number, num2: number): number;
function add2(num1: string, num2: number): string;
function add2(num1: number, num2: string): string;

function add2(num1: Combinable, num2: Combinable) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  return num1.toString() + num2.toString();
}

const result = add2(1, "2");

type UnknownEmployee = Admin | Employee;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  if ("privileges" in emp) console.log(emp.privileges);
  if ("startDate" in emp) console.log(emp.startDate);
};

printEmployeeInfo({ startDate: new Date(), name: "Adham", privileges: [] });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving");
  }
  loadCargo(amount: number) {
    console.log("Loading " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if ("loadCargo" in vehicle) vehicle.loadCargo(12);
  if (vehicle instanceof Truck) vehicle.loadCargo(20);
};

useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case "bird":
      console.log(animal.flyingSpeed);
      break;
    case "horse":
      console.log(animal.runningSpeed);
      break;
  }
};

moveAnimal({ type: "bird", flyingSpeed: 30 });

// Type Casting

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );

// Or

// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;

// Or

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there";
}

// Index Properties

interface ErrorContainer {
  [key: string]: string;
  // id: number; // must be the same index type
}

const errorBag: ErrorContainer = {
  email: "Invalid Email",
  name: "Invalid Name",
};

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
  },
};

console.log(fetchedUserData.job && fetchedUserData.job.title);
// OR
console.log(fetchedUserData?.job?.title);

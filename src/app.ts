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

// Type Guards

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

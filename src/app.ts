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

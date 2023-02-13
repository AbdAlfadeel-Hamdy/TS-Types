"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
const printEmployeeInfo = (emp) => {
    if ("privileges" in emp)
        console.log(emp.privileges);
    if ("startDate" in emp)
        console.log(emp.startDate);
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
    loadCargo(amount) {
        console.log("Loading " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if ("loadCargo" in vehicle)
        vehicle.loadCargo(12);
    if (vehicle instanceof Truck)
        vehicle.loadCargo(20);
};
useVehicle(v2);
const moveAnimal = (animal) => {
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
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there";
}
//# sourceMappingURL=app.js.map
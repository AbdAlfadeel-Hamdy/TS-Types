"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add2(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    return num1.toString() + num2.toString();
}
const result = add2(1, "2");
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
const errorBag = {
    email: "Invalid Email",
    name: "Invalid Name",
};
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: {
        title: "CEO",
    },
};
console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const input = "";
const storedData = input || "Default";
const nullish = input !== null && input !== void 0 ? input : "Default";
console.log(storedData);
console.log(nullish);
//# sourceMappingURL=app.js.map
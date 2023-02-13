"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "gonzalo",
    age: 20,
    hobbies: ["football", "tennis"],
    role: Role.USER,
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
person.hobbies.push("basket");
if (person.role === 0)
    console.log(person.role);
//# sourceMappingURL=complexTypes.js.map
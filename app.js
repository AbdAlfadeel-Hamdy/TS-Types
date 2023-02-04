// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "gonzalo",
//   age: 20,
//   hobbies: ["football", "tennis"],
//   role: [2, "player"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum Role {
//   ADMIN = "gonz",
//   USER = "hossam",
//   AUTHOR = "adham",
// }
var person = {
    name: "gonzalo",
    age: 20,
    hobbies: ["football", "tennis"],
    role: Role.USER
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // hobby.map();
}
person.hobbies.push("basket");
// person.role.push(3);
// person.role[1] = "3";
// person.role = [2, "2",3];
if (person.role === 0)
    console.log(person.role);

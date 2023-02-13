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

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}
// enum Role {
//   ADMIN = "gonz",
//   USER = "hossam",
//   AUTHOR = "adham",
// }
const person = {
  name: "gonzalo",
  age: 20,
  hobbies: ["football", "tennis"],
  role: Role.USER,
};

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map();
}

person.hobbies.push("basket");
// person.role.push(3);
// person.role[1] = "3";
// person.role = [2, "2",3];
if (person.role === 0) console.log(person.role);

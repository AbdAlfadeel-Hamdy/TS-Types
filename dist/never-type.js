"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string")
    userName = userInput;
const generateError = (message, code) => {
    throw { message, code };
};
generateError("Error", 404);
//# sourceMappingURL=never-type.js.map
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string")
    userName = userInput;
var generateError = function (message, code) {
    throw { message: message, code: code };
};
generateError("Error", 404);

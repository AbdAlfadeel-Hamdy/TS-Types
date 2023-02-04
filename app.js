var add = function (num1, num2, showResult) {
    if (showResult)
        console.log(num1 + num2);
    else
        return num1 + num2;
};
add(3, 5, true);

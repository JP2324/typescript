"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// return type number
function addTwo(n1, n2) {
    return n1 + n2;
}
console.log(addTwo(2, 3));
console.log(typeof (addTwo(2, 3)));
// return type string
function getUpper(str) {
    return str.toUpperCase();
}
console.log(getUpper("this is typescript"));
// void function
function signUpUser(name, email, isPaid) {
    console.log("user signed up");
}
signUpUser("jainam", "someone@gmail.com", false);
//default parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("jainam", "s@s.com");
//check value function
function checkEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
console.log(checkEven(4));
console.log(checkEven(5));
console.log();
console.log();
//arrow function
var getHello = function (s) {
    return "hello ".concat(s);
};
console.log(getHello("jainam"));
var heros = ["thor", "spiderman", "ironman"];
var result = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(result);
// function that never returns
function consoleError(errmsg) {
    console.log(errmsg);
}
// function that never returns and throws error
function handleError(errmsg) {
    throw new Error(errmsg);
}

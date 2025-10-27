"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
console.log(identity(5));
console.log(identity('a'));
console.log(identity("Hello world"));
// another example 
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
console.log(typeof (identityTwo({ brand: "something", type: 3 })));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function return object 
function user(name, age) {
    //return { "Name":name,"Age":age };
    return { name: name, age: age };
}
function createUser(_a) {
    return { name: "Alice", age: 30 };
}
function createCourse(_a) {
    return { title: "TypeScript Basics", duration: 120 };
}
console.log(user("Jainam", 23));
console.log(typeof (user("Jainam", 23)));

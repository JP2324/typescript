"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33; // union type
score = "45";
score = 39;
var alex = {
    name: "alex",
    id: 1
};
alex = {
    username: "alx",
    id: 23
};
// function getDbId(id:number|string){
//     console.log(`db id is : ${id}`);
// }
function getDbId(id) {
    if (typeof id === "string") {
        console.log("db id is : ".concat(id.toUpperCase()));
    }
    else {
        console.log("db id is : ".concat(id));
    }
}
getDbId(3);
getDbId("something");
//array of union types
var data1 = [1, 3, 4, 5];
var data2 = ["6", "5", "5"];
var data3 = ["6", "5", 4];
console.log(data3);

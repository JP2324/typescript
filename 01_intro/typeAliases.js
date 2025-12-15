"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log(user);
}
//usage
var user1 = {
    id: 23,
    name: "mr wick",
    email: "wick@yahoo.com"
};
createUser(user1);
/*
=> type (Type Alias)

> Describes the shape of data
> Exists only at compile time
> No runtime output in JavaScript


=> class

> A blueprint for objects
> Exists at runtime
> Can create instances using new

*/ 

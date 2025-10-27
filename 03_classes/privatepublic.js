"use strict";
// class User {
//     public email:string // by default all are public 
//     private name:string 
//     // #name:string private in js
//     readonly city:string = "default city"
//     constructor(email:string,name:string) {
//         this.email = email;
//         this.name =name
//     }
Object.defineProperty(exports, "__esModule", { value: true });
// }
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "default city";
    }
    return User;
}());

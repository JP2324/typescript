"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "default city";
        this.email = email;
        this.name = name;
    }
    User.prototype.citysomething = function (obj) {
        console.log(obj.city);
    };
    return User;
}());
var user1 = new User("someone@gmail.com", "jaymar");
console.log(user1.email);
console.log(user1.city);
user1.city = "new york";
console.log(user1.city);
user1.citysomething(user1);

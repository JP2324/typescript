class User {
    email:string
    name:string
    readonly city:string = "default city"
    constructor(email:string,name:string) {
        this.email = email;
        this.name =name
    }
    
}
const user1 = new User("someone@gmail.com","jaymar")
console.log(user1.email);
console.log(user1.city);
// user1.city = "new city" gives error because city is readonly
export {  };
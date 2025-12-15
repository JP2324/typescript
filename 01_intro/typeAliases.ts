type User = {
  id: number
  name: string
  email: string
}

function createUser(user:User):void{
    console.log(user);
}
//usage
let user1= {
    id:23,
    name:"mr wick",
    email:"wick@yahoo.com"
}
createUser(user1)
export {}


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
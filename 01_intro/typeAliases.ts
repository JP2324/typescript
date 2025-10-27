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
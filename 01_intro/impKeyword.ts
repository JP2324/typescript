// READONLY and optional keyword 
type User ={
    readonly _id:string //can only be read and not changed
    name:string,
    email:string,
    isActice:boolean
    creaditCard?:string //optional property
}

let myUser:User={
    _id:"1234",
    name:"john",
    email:"someone@hotmail.com",
    isActice:true
}

myUser.email="h@gmail.com"
// myUser._id="5678" //Error: Cannot assign to '_id' because it is a read-only property.


//Intersection Types with type aliases
type cardNumber={
    cardnumber:string,
}
type cardDate={
    cardDate:string
}
type cardcvv={
    cardcvv:string
}
type cardDetails = cardNumber & cardDate & cardcvv



export {}
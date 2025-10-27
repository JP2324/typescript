const user:(string | number)[] = ["hello",5] // array 

let userTuple:[string,number,boolean]
userTuple = ["hello",45,false] // tuple 
// (order matters in tuple)

let rgb : [number ,number,number] = [255,123,122]
// use case in rgb color values 


type User = [number,string]
const newUser:User = [
    1,"john doe"
]
newUser[1] = "alex doe" //valid
// newUser.push(true) valid but avoid using push in tuple 

export {}
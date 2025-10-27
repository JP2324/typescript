let score: number|string = 33; // union type
score ="45"
score =39

type User ={
    name:string,
    id : number,
}
type Admin ={
    username:string,
    id : number,
}

let alex: User|Admin ={
    name:"alex",
    id:1
}
alex={
    username:"alx",
    id:23
}


// function getDbId(id:number|string){
//     console.log(`db id is : ${id}`);
    
// }
function getDbId(id:number|string){
    if(typeof id ==="string"){
        console.log(`db id is : ${id.toUpperCase()}`);
    }
    else{
        console.log(`db id is : ${id}`);
    }
    
}
getDbId(3);
getDbId("something");


//array of union types
const data1 :number[] =[1,3,4,5]
const data2 :string[] =["6","5","5"]
const data3 : (number|string)[] =["6","5",4]
console.log(data3);


let pi : 3.14 = 3.14 //literal type

let seatAllotment : "aisle" | "middle" | "window"
seatAllotment ="aisle"
seatAllotment ="middle"
seatAllotment ="window"

export {}
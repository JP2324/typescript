// return type number
function addTwo(n1:number, n2:number): number {
    return n1 + n2;
}
console.log(addTwo(2,3));
console.log(typeof(addTwo(2,3)));

// return type string
function getUpper(str:string): string {
    return str.toUpperCase();
}

console.log(getUpper("this is typescript"));

// void function
function signUpUser(name:string, email:string,isPaid:boolean):void{
    console.log("user signed up");
}
signUpUser("jainam","someone@gmail.com",false)

//default parameters
let loginUser = (name:string, email:string, isPaid:boolean = false)=>{
    
}
loginUser("jainam","s@s.com")

//check value function
function checkEven(num:number) : boolean{
    if(num%2===0){
        return true;
    }
    return false;
}
console.log(checkEven(4));
console.log(checkEven(5));
console.log();
console.log();

//arrow function
const getHello = (s:string):string=>{
    return `hello ${s}`;
}
console.log(getHello("jainam"));

const heros = ["thor","spiderman","ironman"];
const result = heros.map((hero):string=>{
    return `hero is ${hero}`;
});
console.log(result);

// function that never returns
function consoleError(errmsg:string):void {
    console.log(errmsg);
}

// function that never returns and throws error
function handleError(errmsg:string):never {
    throw new Error(errmsg);
}


export {};
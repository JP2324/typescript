let greetings:string = "Hello, TypeScript!";

console.log(greetings);

//number
let userId: number = 12345;
let price: number = 99.99;
let discount = 15.5; //better to explicitly define types
//boolean
let isLoggedIn: boolean = true;
let hasPremiumAccess: boolean = false;

//any
//let hero; //not recommended
let hero:string;
function getHero() {
    return "Superman";
}
hero = getHero();

export {};
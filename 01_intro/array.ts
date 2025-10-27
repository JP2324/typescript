const heros: string[] = []; // declare once
const power : number[] = [];


heros.push("spiderman");
heros.push("ironman");
power.push(100)
power.push(150)

console.log(heros, power);

const arr:Array<number>=[];
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

//typer User 
type User = {
    name:string,
    isActice: boolean
}

const allUsers:User[]=[];
allUsers.push({name:"sachin", isActice:true});
allUsers.push({name:"messi", isActice:false});
console.log(allUsers);

//multi dimentional array
const MLModels:number[][]=[]; // 2D array
MLModels.push([255,255,255]);
MLModels.push([0,0,0]);
MLModels.push([124,255,0]);
console.log();
console.log(MLModels);

export {};
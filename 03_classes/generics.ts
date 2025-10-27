function identity<Type>(arg:Type):Type{
    return arg
}

console.log(identity(5));
console.log(identity('a'));
console.log(identity("Hello world"));


// another example 
const score: Array<number> = []
const names :Array<string> =[]
 
function identityOne(val : boolean|number) : number| boolean{
    return val
}

function identityTwo<Type>(val: Type):Type{
    return val
}

interface Bottle{
    brand:string,
    type:number
}
console.log(typeof(identityTwo<Bottle>({brand:"something",type:3})))

export {}
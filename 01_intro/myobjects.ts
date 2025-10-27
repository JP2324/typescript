// function return object 
function user(name: string, age: number):object {
    //return { "Name":name,"Age":age };
    return {name,age };
}

function createUser({}: { name: string; age: number }) {
    return { name: "Alice", age: 30 };
}
function createCourse({}: { title: string; duration: number }) {
    return { title: "TypeScript Basics", duration: 120 };
}

console.log(user("Jainam",23));
console.log(typeof(user("Jainam",23)));

//default paramter of object
function createProfile({ name = "Unknown", age = 0 }: { name?: string; age?: number } = {}) {
    return { name, age };
}


export {};
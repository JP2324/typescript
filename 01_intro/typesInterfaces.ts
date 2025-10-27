interface User {
    readonly dbId:number,
    email:string,
    userId : number,
    googleId?:string,
    // two differrent ways to write functions in interface
    startTrial:() => string,
    getCoupon:(couponname:string, value:number) => number
}

interface User { // interface merging in typescript 
    githubToken:string
}

interface Admin extends User { // interface inheritance 
    role:"admin" | "ta" | "learner"
}

const jay:Admin ={ // implementing Admin interface 
    dbId:12345,
    email:"someone@12",
    userId:1234,
    googleId:"google_12345",
    githubToken:"github_12345",
    role:"ta",
    startTrial:()=>{ // function implementation from interface
        return "this is jay trial"
    },
    getCoupon:(name:string,off:number)=>{
        return 10
    }
}
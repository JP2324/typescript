interface User {
    readonly dbId:number,
    email:string,
    userId : number,
    googleId?:string,
    // two differrent ways to write functions in interface
    startTrial:() => string,
    getCoupon:(couponname:string, value:number) => number
}

const jay:User ={
    dbId:12345,
    email:"someone@12",
    userId:1234,
    googleId:"google_12345",
    startTrial:()=>{ // function implementation from interface
        return "this is jay trial"
    },
    getCoupon:(name:string,off:number)=>{
        return 10
    }
}

jay.email="newemail@123" // valid

export {}
// class User {
//     public email:string // by default all are public 
//     private name:string 
//     // #name:string private in js
//     readonly city:string = "default city"
//     constructor(email:string,name:string) {
//         this.email = email;
//         this.name =name
//     }
    
// }

class User {
    readonly city:string = "default city"
    constructor(
        public email:string,
        public name:string,
        private userId:string
    ){
       
    }
    
}

export {  };
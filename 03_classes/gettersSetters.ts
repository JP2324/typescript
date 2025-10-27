
class User {
    protected _courseCount =1
    readonly city:string = "default city"

    constructor(
        public email:string,
        public name:string,
        private userId:string
    ){
    }
    //private method
    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){ // cannot have return type annotaion
        if(courseNum <=1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}

class SubUser extends User{
    isFamily:boolean = true 
    changeCourseCount(){
        this._courseCount =3
    }
}

const user= new User("something@hotmail.com","jaymar","jayjay12")

export {}
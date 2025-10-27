abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string 
    ){}
    abstract getSepia():void
}



class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter) // calls the parent class contructor
    }
    getSepia(): void {
        console.log("instagram class");
    }
}
const user = new Instagram("potrait","natural",3)
user.getSepia()
console.log(user.filter);


export {}
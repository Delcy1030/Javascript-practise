class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username  : ${this.username}`);
    }

    static createId(){
        return `123`
    }

    
}
const delcy = new User("delcy")
   //console.log( delcy.createId())

   class Teacher extends User{
    constructor(username,mail){
        super(username)
         this.mail=mail
        }
   }

   const iphone = new Teacher("iphone","i@phone.com")
   console.log(iphone.createId());
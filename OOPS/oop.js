const user  = {
    username: "name",
    loginCount: 8,
    signedIn: true,

    getUserdetails: function() {
        // console.log("Got user details from databases");
        // console.log(`Username: ${this.username}`);
        
    }
}

// console.log(user.username);
// console.log(user.getUserdetails());



 function User(username , loginCount , isloggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    return this
 }   
// if there will be no new constructor the code will create multiple instances in the output ???? TO AVOID THIS AND THE REMAINING 
// PART WE USE new  

 const UserOne = new User("Kreta" , 12 , true) ;
 const UserTwo = new User("Delta" , 11 , false)

 console.log(UserOne);
 
 

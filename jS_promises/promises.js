
 // promises and api'ss 

 const promiseOne = new Promise( function(resolve , reject)
{
    // Do an async task
    //DB calls,
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
        
    }, 1000);
})
  

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyn task 2");
        resolve()
    }, 1000 )


}) .then(function(){
    console.log("Async 2 resolved");
    
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "Arrow" , email: "xzy@345yahoo.com"})
        
    },1000)
})

promiseThree.then(function(user){
 console.log(user);
 
})
const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error  = true
        if(!error) {
            resolve({Name:"mwew" , age : " age"})
         } else {
            reject('Error : Something went wrong')
         }  

    } , 2000)

})   

promisefour
.then((user) => { 
    console.log(user);
    return user.Name
})
.then((Name) => {
    console.log(Name);
})
.catch(function(error){
    console.log(error);   
}).finally(() => console.log("The promise is either resolved or what else") );



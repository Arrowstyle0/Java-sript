const app = {}

app.id =  "dajknda" 

app.data = "index.1"

app.lcking = "456"

// console.log(app);

const reguser = {

    email : "someone@gmail.com",
    fullName : {
        firstName : "DELTA",
        lastname : "MODE"
    }
}

// console.log(reguser.fullName);

const  pnj = {1 : "a", 2 : "b" };
const pnj2 = {3 : "a", 4 : "b"} ;

const pnj3 = {pnj, pnj2};

const obj3 = Object.assign(pnj,pnj2)

// console.log(pnj3);


console.log(obj3);


  
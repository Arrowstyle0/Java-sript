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

const object = {

    userName : "Arrowstyle",
    userAge : 45,
    userHobbies : {
        firstHobbie : "Design",
        secondHobbie : "Gaming"
    },
    userprofession : "Student",
    userMarksrecord : {10 : "65%" , 12 : "55%"},

}
  
console.log(object.userName.substring(3,6));


let data = new Date()

console.log(data.toLocaleString())

const course = {
    courseName : "java.basics",
    price : 34,
    courseInstructor : "Brave"
}

// course.
// courseInstructor

const {courseInstructor} = course 

console.log(courseInstructor); // to destructure the object 

// {
//     name : "ndkaw",
//     coursenanme : "js in hindi",
//     "price" : 457,



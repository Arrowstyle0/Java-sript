// Date()

let  theDate = new Date()

 console.log(theDate.toDateString()); // Thu Jan 30 2025
console.log(theDate.toLocaleString()); // 1/30/2025, 5:21:32 PM
console.log(theDate.toString()); //output Thu Jan 30 2025 17:21:32 GMT+0000 (Coordinated Universal Time)

console.log(typeof theDate);

let theNewdate = new Date(2023, 3 , 4);
console.log(theNewdate.toLocaleString());

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(theNewdate.getTime());
console.log(theNewdate.getFullYear());



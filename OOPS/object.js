function kunit(num) {
    return num*5
}
kunit.power = 2

console.log(kunit(5));

console.log(kunit.power);


function createUser(username , score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    score++
}

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}

const user =  new createUser("user" , 25) 
const user2 = new createUser("refer", 34)

user.printme()

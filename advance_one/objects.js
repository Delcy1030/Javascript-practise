function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe= function(){
    console.log(`${this.username} your score is ${this.score}`);
}

const vish = new createUser("vishal",55)
const del = new createUser("delcy",33)

vish.printMe()

const name="del"
const roll = 34
//console.log(name+": "+roll)  minstead of this use new method
console.log(`my name is ${name} and my roll number is ${roll}`);

const gamename = new String('football')
console.log(gamename[1]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('o'))

const newString=gamename.substring(0,4)
console.log(newString)

const ewString=gamename.slice(-7,5)
console.log(ewString)
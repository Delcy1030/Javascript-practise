const map=new Map()
map.set('in','INDIA')
map.set('usa','united states')
map.set('fr','france')
map.set('in','INDIA')
//console.log(map); 
for (const [key,value] of map) 
    {
    console.log(key, " :- ",value);
}


let myNum=[1,2,3,4,5,6,7,8,9,10]
let newNum= myNum
.map((num) => {return num*10})
.map((num) =>(num+1))
.filter((num) =>(num>40))

console.log(newNum)
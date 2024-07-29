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